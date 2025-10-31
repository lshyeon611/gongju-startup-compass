import { Program } from "@/types/program";

export const programs: Program[] = [
  {
    id: "1",
    name: "공주시 청년 창업 지원금",
    target: "예비창업자",
    type: "자금",
    field: "기타",
    description: "청년 창업자를 위해 최대 1000만원 지원",
    organization: "공주시청",
    link: "#",
    details: "만 39세 이하 청년 예비창업자를 대상으로 창업 초기 자금을 지원합니다. 사업계획서 심사를 통해 선정됩니다."
  },
  {
    id: "2",
    name: "공주대 창업보육센터",
    target: "초기창업자",
    type: "공간",
    field: "IT",
    description: "초기 창업자를 위한 입주 공간과 멘토링 제공",
    organization: "공주대학교",
    link: "#",
    details: "창업 3년 이내 기업을 대상으로 사무공간, 회의실, 멘토링을 제공하며 최대 2년간 입주 가능합니다."
  },
  {
    id: "3",
    name: "지역 소상공인 멘토링",
    target: "소상공인",
    type: "멘토링",
    field: "식품",
    description: "지역 소상공인을 전문 멘토와 연결",
    organization: "공주상공회의소",
    link: "#",
    details: "식음료업 소상공인을 대상으로 경영, 마케팅, 위생 관리 등 전문가 멘토링을 3개월간 제공합니다."
  },
  {
    id: "4",
    name: "관광 창업 아카데미",
    target: "예비창업자",
    type: "교육",
    field: "관광",
    description: "관광 분야 창업을 위한 8주 교육 프로그램",
    organization: "충남관광재단",
    link: "#",
    details: "공주 지역 관광 자원을 활용한 창업 아이디어 발굴부터 사업화까지 단계별 교육을 제공합니다."
  },
  {
    id: "5",
    name: "IT 스타트업 인큐베이팅",
    target: "초기창업자",
    type: "멘토링",
    field: "IT",
    description: "IT 스타트업 성장을 위한 집중 지원",
    organization: "충남테크노파크",
    link: "#",
    details: "IT 기술 기반 초기 스타트업에 기술 멘토링, 투자 연계, 네트워킹 기회를 제공합니다."
  },
  {
    id: "6",
    name: "문화콘텐츠 창작 지원",
    target: "예비창업자",
    type: "자금",
    field: "문화",
    description: "문화콘텐츠 창작자를 위한 제작 지원금",
    organization: "공주시 문화관광과",
    link: "#",
    details: "백제문화권 특화 콘텐츠 제작을 위한 최대 500만원의 제작비를 지원합니다."
  },
  {
    id: "7",
    name: "소상공인 온라인 판로 지원",
    target: "소상공인",
    type: "교육",
    field: "기타",
    description: "온라인 쇼핑몰 구축 및 운영 교육",
    organization: "소상공인시장진흥공단",
    link: "#",
    details: "온라인 판매 채널 구축, SNS 마케팅, 라이브커머스 활용 등 디지털 전환 교육을 제공합니다."
  },
  {
    id: "8",
    name: "공유 주방 공간 지원",
    target: "초기창업자",
    type: "공간",
    field: "식품",
    description: "식품 창업자를 위한 공유 주방 공간",
    organization: "공주시 사회적경제지원센터",
    link: "#",
    details: "식품 위생 허가를 받은 공유 주방을 저렴하게 이용할 수 있으며, 초기 창업 비용을 절감할 수 있습니다."
  }
];
