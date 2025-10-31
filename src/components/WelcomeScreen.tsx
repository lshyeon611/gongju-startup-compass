import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center space-y-8 animate-in fade-in duration-700">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg mb-6">
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            GongjuMatch
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            공주 지역 창업 지원 프로그램 추천
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            세 가지 간단한 질문으로 당신에게 딱 맞는 창업 지원 프로그램을 찾아드립니다
          </p>
        </div>
        
        <Button 
          onClick={onStart}
          size="lg"
          className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          나에게 맞는 지원 찾기
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
