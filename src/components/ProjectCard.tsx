import { ExternalLink } from "lucide-react";
import { FaGithubSquare } from 'react-icons/fa'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  repoUrl,
  image,
}: ProjectCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="aspect-video w-full overflow-hidden bg-secondary">
        <Image
          width={200}
          height={200}
          src={image}
          alt={`Preview do projeto ${title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="font-display text-xl text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary/80 text-secondary-foreground hover:bg-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="default" size="sm" className="flex-1 rounded-full">
          <ExternalLink className="mr-2 h-4 w-4" />
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            
            Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" className="flex-1 rounded-full border-border/50">
         <FaGithubSquare className="mr-2 h-4 w-4" />
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
           
            Código
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
