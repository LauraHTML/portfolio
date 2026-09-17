import { ExternalLink } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
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
import Image from "next/image";
import { ProjectsT } from "@/lib/data";
import Link from "next/link";

export function ProjectCard({
  id,
  nome,
  descricao,
  competencias,
  demo,
  repositorio,
  imagem,
}: ProjectsT) {
  const categoriasPreenchidas = Object.entries(competencias || {}).filter(
    ([, tecnologias]) => Array.isArray(tecnologias) && tecnologias.length > 0,
  );

  return (
    <Card>
      <div className="aspect-video w-full overflow-hidden bg-secondary">
        <Image
          width={200}
          height={200}
          src={imagem}
          alt={`Preview do projeto ${nome}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="eager"
        />
      </div>
      <CardHeader className="grow">
        <CardTitle className="font-display text-xl text-card-foreground">
          {nome}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {descricao}
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        {categoriasPreenchidas.map(([categoria, tecnologias]) => (
          <div key={categoria}>
            <strong>{categoria}</strong>

            <div className="my-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(tecnologias as string[]).map((tecnologia) => (
                <Badge variant="secondary" key={tecnologia}>
                  {tecnologia}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Link href={demo}>
          <Button variant="default" size="sm" className="flex-1 rounded-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Button>
        </Link>
        <Link href={repositorio}>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 rounded-full border-border/50"
          >
            <FaGithubSquare className="mr-2 h-4 w-4" />
            Código
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
