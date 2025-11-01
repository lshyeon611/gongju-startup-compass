import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { stage, supportType, field } = await req.json();
    
    console.log('AI 추천 요청:', { stage, supportType, field });

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `당신은 공주시 창업 지원 프로그램 추천 전문가입니다. 
사용자의 조건에 맞는 3-5개의 프로그램을 추천해주세요.

공주시의 실제 지원 프로그램 예시:
- 공주시 청년 창업 지원금 (예비창업자/자금/IT)
- 공주시 스마트팜 지원사업 (초기창업자/공간/식품)
- 공주시 문화콘텐츠 창업교육 (예비창업자/교육/문화)
- 충남 소상공인 경영개선 지원 (소상공인/멘토링/기타)
- 공주 관광상품 개발 지원 (초기창업자/자금/관광)

각 프로그램은 다음 형식으로 반환:
{
  "id": "고유ID",
  "name": "프로그램명",
  "target": "예비창업자|초기창업자|소상공인",
  "type": "자금|공간|멘토링|교육",
  "field": "IT|관광|식품|문화|기타",
  "description": "한 문장 요약",
  "organization": "주관 기관",
  "link": "https://www.gongju.go.kr/",
  "details": "상세 설명"
}`;

    const userPrompt = `다음 조건에 맞는 창업 지원 프로그램을 추천해주세요:
- 창업 단계: ${stage}
- 필요한 지원: ${supportType}
- 관심 분야: ${field}

JSON 배열로만 응답해주세요. 설명 없이 배열만 반환하세요.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI 게이트웨이 오류:', response.status, errorText);
      
      // Fallback 데이터 반환
      const fallbackPrograms = getFallbackPrograms(stage, supportType, field);
      return new Response(JSON.stringify(fallbackPrograms), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log('AI 응답:', aiResponse);

    // JSON 파싱 시도
    let programs;
    try {
      // 마크다운 코드 블록 제거
      const jsonStr = aiResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      programs = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      programs = getFallbackPrograms(stage, supportType, field);
    }

    return new Response(JSON.stringify(programs), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('ai-recommend 오류:', error);
    
    // 에러 발생 시 fallback 데이터 반환
    const { stage, supportType, field } = await req.json().catch(() => ({
      stage: '예비창업자',
      supportType: '자금',
      field: 'IT'
    }));
    
    const fallbackPrograms = getFallbackPrograms(stage, supportType, field);
    
    return new Response(JSON.stringify(fallbackPrograms), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function getFallbackPrograms(stage: string, supportType: string, field: string) {
  return [
    {
      id: `fallback-1-${Date.now()}`,
      name: `공주시 ${stage} ${supportType} 지원`,
      target: stage,
      type: supportType,
      field: field,
      description: `${field} 분야 ${stage}를 위한 ${supportType} 지원 프로그램입니다.`,
      organization: "공주시청 창업지원과",
      link: "https://www.gongju.go.kr/",
      details: `이 프로그램은 공주시에서 운영하는 ${field} 분야의 ${stage}를 대상으로 한 ${supportType} 지원 사업입니다. 자세한 내용은 공주시청 홈페이지를 참고해주세요.`
    },
    {
      id: `fallback-2-${Date.now()}`,
      name: "충남 창업 종합 지원센터",
      target: stage,
      type: "멘토링",
      field: field,
      description: "충남 지역 창업자를 위한 멘토링 및 컨설팅 지원",
      organization: "충청남도 창업지원센터",
      link: "https://www.gongju.go.kr/",
      details: "창업 전반에 대한 전문가 멘토링과 사업화 컨설팅을 제공합니다."
    }
  ];
}
