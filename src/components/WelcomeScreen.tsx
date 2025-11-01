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
        <div className="container mx-auto px-4 py-24 md:py-40">
          <div className="max-w-4xl mx-auto text-center space-y-10 animate-in fade-in duration-700">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl mb-4 animate-pulse">
              <Rocket className="w-14 h-14 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              KongjuMatch
            </h1>
            <p className="text-2xl md:text-4xl text-foreground font-semibold leading-relaxed">
              공주 지역 창업자를 위한<br className="md:hidden" /> 맞춤 지원 추천 앱
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              당신에게 가장 적합한 창업 지원 프로그램을<br className="md:hidden" /> 바로 확인하세요!
            </p>
            <Button 
              onClick={onStart}
              size="lg"
              className="text-xl px-16 py-8 shadow-2xl hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/50 transition-all duration-300 hover:scale-110 mt-8 font-bold"
            >
              나에게 맞는 지원 찾기
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-bl from-primary/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/20 to-transparent blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
              KongjuMatch 주요 기능
            </h2>
            <p className="text-muted-foreground text-center mb-16 text-xl leading-relaxed">
              AI 기반 맞춤 추천으로 시간을 절약하세요
            </p>
            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-accent/5">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold leading-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-loose text-base">
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
      <section className="py-28 bg-gradient-to-br from-accent/10 via-accent/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
              프로그램 예시
            </h2>
            <p className="text-muted-foreground text-center mb-16 text-xl leading-relaxed">
              이런 지원 프로그램들을 추천받을 수 있습니다
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {demoPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <Badge variant="secondary" className="text-sm px-3 py-1 font-semibold">
                        {program.type}
                      </Badge>
                      <Badge variant="outline" className="text-sm px-3 py-1 font-semibold">
                        {program.target}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl leading-tight">{program.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {program.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-loose text-base">
                      {program.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full text-base py-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300" disabled>
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
      <section className="py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              세 가지 간단한 질문으로 당신에게 딱 맞는<br className="md:hidden" /> 창업 지원 프로그램을 찾아드립니다
            </p>
            <Button 
              onClick={onStart}
              size="lg"
              className="text-xl px-16 py-8 shadow-2xl hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/50 transition-all duration-300 hover:scale-110 font-bold"
            >
              나에게 맞는 지원 찾기
            </Button>
            
            <div className="pt-16 mt-16 border-t-2 border-border">
              <h3 className="text-2xl font-bold mb-8 leading-tight">문의하기</h3>
              <div className="space-y-5 text-muted-foreground">
                <div className="flex items-center justify-center gap-3 text-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="leading-relaxed">공주시 창업지원센터</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="leading-relaxed">041-XXX-XXXX</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="leading-relaxed">startup@kongju.go.kr</span>
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
