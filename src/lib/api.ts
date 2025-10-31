import { Program } from "@/types/program";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchPrograms = async (): Promise<Program[]> => {
  if (!API_BASE_URL) {
    throw new Error("API URL not configured");
  }

  const response = await fetch(`${API_BASE_URL}/programs`);
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
