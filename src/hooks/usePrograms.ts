import { useState } from "react";
import { Program, UserPreferences } from "@/types/program";
import { programs as fallbackPrograms } from "@/data/programs";
import { fetchAIRecommendations } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export const usePrograms = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPrograms = async (preferences: UserPreferences) => {
    setIsLoading(true);
    
    try {
      const data = await fetchAIRecommendations(preferences);
      setPrograms(data);
    } catch (error) {
      console.error("AI 추천 실패:", error);
      
      // Fallback: 로컬 데이터 필터링
      const filtered = fallbackPrograms.filter(
        (program) =>
          program.target === preferences.stage &&
          program.type === preferences.supportType &&
          program.field === preferences.field
      );
      
      setPrograms(filtered);
      
      toast({
        title: "로컬 데이터 사용 중",
        description: "AI 추천이 불가능하여 예시 데이터를 표시합니다.",
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { programs, isLoading, fetchPrograms };
};
