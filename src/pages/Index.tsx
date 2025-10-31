import { useState } from "react";
import { UserPreferences } from "@/types/program";
import { programs } from "@/data/programs";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultScreen from "@/components/ResultScreen";

type Screen = "welcome" | "questions" | "results";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [preferences, setPreferences] = useState<UserPreferences>({
    stage: null,
    supportType: null,
    field: null,
  });

  const handleStart = () => {
    setCurrentScreen("questions");
  };

  const handleComplete = (userPreferences: UserPreferences) => {
    setPreferences(userPreferences);
    setCurrentScreen("results");
  };

  const handleReset = () => {
    setPreferences({
      stage: null,
      supportType: null,
      field: null,
    });
    setCurrentScreen("welcome");
  };

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
