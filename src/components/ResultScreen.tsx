import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Program, UserPreferences } from "@/types/program";
import ProgramCard from "./ProgramCard";
import { RefreshCw, AlertCircle } from "lucide-react";
import { useState } from "react";

interface ResultScreenProps {
  programs: Program[];
  preferences: UserPreferences;
  onReset: () => void;
}

const ResultScreen = ({ programs, preferences, onReset }: ResultScreenProps) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const filteredPrograms = programs.filter(
    (program) =>
      program.target === preferences.stage &&
      program.type === preferences.supportType &&
      program.field === preferences.field
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            추천 프로그램
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 rounded-full">
              {preferences.stage}
            </span>
            <span>•</span>
            <span className="px-3 py-1 bg-secondary/10 rounded-full">
              {preferences.supportType}
            </span>
            <span>•</span>
            <span className="px-3 py-1 bg-accent rounded-full">
              {preferences.field}
            </span>
          </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                onClick={() => setSelectedProgram(program)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <AlertCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              조건에 맞는 프로그램이 없습니다
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              다른 조건으로 다시 검색해보시거나, 공주시청 창업 지원과로 문의해주세요.
            </p>
          </div>
        )}

        <div className="flex justify-center pt-4">
          <Button
            onClick={onReset}
            variant="outline"
            size="lg"
            className="text-base px-6"
          >
            <RefreshCw className="mr-2 w-4 h-4" />
            다시 추천받기
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProgram?.name}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProgram?.organization}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {selectedProgram?.target}
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                {selectedProgram?.type}
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                {selectedProgram?.field}
              </span>
            </div>
            <p className="text-foreground/80 leading-relaxed text-base">
              {selectedProgram?.description}
            </p>
            {selectedProgram?.details && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-foreground">상세 정보</h4>
                <p className="text-foreground/80 leading-relaxed">
                  {selectedProgram.details}
                </p>
              </div>
            )}
            <Button
              onClick={() => window.open(selectedProgram?.link, '_blank')}
              className="w-full"
              size="lg"
            >
              신청하기
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResultScreen;
