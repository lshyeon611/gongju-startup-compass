import { useState, useEffect } from "react";
import { Program } from "@/types/program";
import { programs as fallbackPrograms } from "@/data/programs";
import { fetchPrograms } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

export const usePrograms = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPrograms = async () => {
      setIsLoading(true);
      
      try {
        const data = await fetchPrograms();
        setPrograms(data);
      } catch (error) {
        console.log("API 호출 실패, fallback 데이터 사용:", error);
        setPrograms(fallbackPrograms);
        
        toast({
          title: "로컬 데이터 사용 중",
          description: "API 연결이 불가능하여 예시 데이터를 표시합니다.",
          variant: "default",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadPrograms();
  }, []);

  return { programs, isLoading };
};
