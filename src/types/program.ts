export type StartupStage = "예비창업자" | "초기창업자" | "소상공인";
export type SupportType = "자금" | "공간" | "멘토링" | "교육";
export type InterestField = "IT" | "관광" | "식품" | "문화" | "기타";

export interface Program {
  id: string;
  name: string;
  target: StartupStage;
  type: SupportType;
  field: InterestField;
  description: string;
  organization: string;
  link: string;
  details?: string;
}

export interface UserPreferences {
  stage: StartupStage | null;
  supportType: SupportType | null;
  field: InterestField | null;
}
