import { useState } from "react";
import { UserPreferences } from "@/types/program";
import { usePrograms } from "@/hooks/usePrograms";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultScreen from "@/components/ResultScreen";

type Screen = "welcome" | "questions" | "results";

const Index = () => {
  const { programs, isLoading, fetchPrograms } = usePrograms();
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [preferences, setPreferences] = useState<UserPreferences>({
    stage: null,
    supportType: null,
    field: null,
  });

  const handleStart = () => {
    setCurrentScreen("questions");
  };

  const handleComplete = async (userPreferences: UserPreferences) => {
    setPreferences(userPreferences);
    setCurrentScreen("results");
    await fetchPrograms(userPreferences);
  };

  const handleReset = () => {
    setPreferences({
      stage: null,
      supportType: null,
      field: null,
    });
    setCurrentScreen("welcome");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">프로그램 데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      {currentScreen === "questions" && <QuestionScreen onComplete={handleComplete} />}
      {currentScreen === "results" && (
        <ResultScreen
          programs={programs}
          preferences={preferences}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default Index;
