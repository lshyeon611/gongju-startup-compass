import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, Brain, Database, Mail, MapPin, Phone } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const features = [
    {
      icon: Target,
      title: "맞춤형 프로그램 추천",
      description: "예비창업자, 초기창업자, 소상공인 각각에게 최적화된 지원 프로그램을 추천합니다."
    },
    {
      icon: Brain,
      title: "AI 기반 요약 & 추천",
      description: "AI가 프로그램의 핵심 내용을 요약하고 당신에게 가장 적합한 지원을 찾아드립니다."
    },
    {
      icon: Database,
      title: "실시간 데이터 연동",
      description: "공공기관의 최신 정보를 기반으로 신뢰할 수 있는 지원 프로그램을 제공합니다."
    }
  ];

  const demoPrograms = [
    {
      name: "공주시 청년 창업 지원금",
      type: "자금",
      target: "예비창업자",
      description: "청년 창업자를 위해 최대 1000만원을 지원하는 프로그램입니다.",
      organization: "공주시청"
    },
    {
      name: "창업 멘토링 프로그램",
      type: "멘토링",
      target: "초기창업자",
      description: "경험 많은 전문가의 1:1 멘토링으로 성공적인 창업을 돕습니다.",
      organization: "공주시 창업지원센터"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/30 via-background to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg mb-6">
              <Rocket className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GongjuMatch
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold">
              공주 지역 창업자를 위한 맞춤 지원 추천 앱
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              당신에게 가장 적합한 창업 지원 프로그램을 바로 확인하세요!
            </p>
            <Button 
              onClick={onStart}
              size="lg"
              className="text-lg px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mt-4"
            >
              나에게 맞는 지원 찾기
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              GongjuMatch 주요 기능
            </h2>
            <p className="text-muted-foreground text-center mb-12 text-lg">
              AI 기반 맞춤 추천으로 시간을 절약하세요
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              프로그램 예시
            </h2>
            <p className="text-muted-foreground text-center mb-12 text-lg">
              이런 지원 프로그램들을 추천받을 수 있습니다
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {demoPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {program.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.target}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {program.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed">
                      {program.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" disabled>
                      신청 바로가기
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground">
              세 가지 간단한 질문으로 당신에게 딱 맞는 창업 지원 프로그램을 찾아드립니다
            </p>
            <Button 
              onClick={onStart}
              size="lg"
              className="text-lg px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              나에게 맞는 지원 찾기
            </Button>
            
            <div className="pt-12 mt-12 border-t border-border">
              <h3 className="text-xl font-semibold mb-6">문의하기</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>공주시 창업지원센터</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>041-XXX-XXXX</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>startup@gongju.go.kr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeScreen;
