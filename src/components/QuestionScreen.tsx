import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPreferences, StartupStage, SupportType, InterestField } from "@/types/program";
import { ArrowRight, Building2, Heart, Lightbulb } from "lucide-react";

interface QuestionScreenProps {
  onComplete: (preferences: UserPreferences) => void;
}

const QuestionScreen = ({ onComplete }: QuestionScreenProps) => {
  const [stage, setStage] = useState<StartupStage | null>(null);
  const [supportType, setSupportType] = useState<SupportType | null>(null);
  const [field, setField] = useState<InterestField | null>(null);

  const stages: StartupStage[] = ["예비창업자", "초기창업자", "소상공인"];
  const supportTypes: SupportType[] = ["자금", "공간", "멘토링", "교육"];
  const fields: InterestField[] = ["IT", "관광", "식품", "문화", "기타"];

  const handleSubmit = () => {
    if (stage && supportType && field) {
      onComplete({ stage, supportType, field });
    }
  };

  const isComplete = stage && supportType && field;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            세 가지만 알려주세요
          </h2>
          <p className="text-muted-foreground">
            답변을 선택하면 맞춤형 프로그램을 추천해드립니다
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1 */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  현재 창업 단계는?
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {stages.map((s) => (
                  <Button
                    key={s}
                    variant={stage === s ? "default" : "outline"}
                    onClick={() => setStage(s)}
                    className="h-auto py-4 text-base"
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Question 2 */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  필요한 지원 유형은?
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {supportTypes.map((type) => (
                  <Button
                    key={type}
                    variant={supportType === type ? "default" : "outline"}
                    onClick={() => setSupportType(type)}
                    className="h-auto py-4 text-base"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Question 3 */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  관심 분야는?
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {fields.map((f) => (
                  <Button
                    key={f}
                    variant={field === f ? "default" : "outline"}
                    onClick={() => setField(f)}
                    className="h-auto py-4 text-base"
                  >
                    {f}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={handleSubmit}
            disabled={!isComplete}
            size="lg"
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
          >
            추천 프로그램 보기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
