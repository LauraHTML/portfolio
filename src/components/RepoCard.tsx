import { Star, GitFork } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithubSquare } from 'react-icons/fa'

interface RepoCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export function RepoCard({ name, description, language, stars, forks, url }: RepoCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="group h-full flex flex-col border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="font-display text-lg text-card-foreground group-hover:text-primary">
              {name}
            </CardTitle>
            <FaGithubSquare className="h-5 w-5 shrink-0 text-muted-foreground" />
          </div>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
        <CardFooter className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-secondary/80 text-secondary-foreground">
            {language}
          </Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {forks}
            </span>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
}
