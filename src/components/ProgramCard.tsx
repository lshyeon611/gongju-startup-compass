import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Program } from "@/types/program";
import { ExternalLink, Building, Tag } from "lucide-react";

interface ProgramCardProps {
  program: Program;
  onClick?: () => void;
}

const ProgramCard = ({ program, onClick }: ProgramCardProps) => {
  return (
    <Card className="h-full flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {program.type}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {program.target}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-tight">{program.name}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm">
          <Building className="w-3 h-3" />
          {program.organization}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-foreground/80 leading-relaxed">{program.description}</p>
        <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
          <Tag className="w-3 h-3" />
          <span>{program.field}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button 
          variant="default" 
          className="flex-1"
          onClick={() => window.open(program.link, '_blank')}
        >
          신청하기
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
        {program.details && (
          <Button 
            variant="outline" 
            onClick={onClick}
          >
            상세보기
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
