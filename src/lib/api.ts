import { Program, UserPreferences } from "@/types/program";
import { supabase } from "@/integrations/supabase/client";

export const fetchAIRecommendations = async (preferences: UserPreferences): Promise<Program[]> => {
  const { data, error } = await supabase.functions.invoke('ai-recommend', {
    body: {
      stage: preferences.stage,
      supportType: preferences.supportType,
      field: preferences.field,
    }
  });

  if (error) {
    console.error('AI 추천 오류:', error);
    throw error;
  }

  return data as Program[];
};
