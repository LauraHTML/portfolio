"use client";
// export const metadata = {
//   title: "Projetos",
//   description: "Explore os projetos criados.",
// };
import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/services/getProjects";
import { ProjectsT } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectsT[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const projectsList = async () => {
      try {
        setLoading(true);
        const response = await getProjects();
        setProjects(response);
      } catch (err: any) {
        setLoading(false);
        setError(err);
        console.error(`Erro ao buscar projetos: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    projectsList();
  }, []);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Projetos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Aplicações web que desenvolvi para praticar e demonstrar minhas
            habilidades.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects !== undefined ? (
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                key={project.id}
                nome={project.nome}
                descricao={project.descricao}
                competencias={project.competencias}
                demo={project.demo}
                repositorio={project.repositorio}
                imagem={project.imagem}
              />
            ))
          ) : (
            <p>Nenhum projeto encontrado</p>
          )}
          {loading &&
            Array.from({ length: 3 }, (_, index) => (
              <Card className="w-full max-w-xs" key={index}>
                <CardContent>
                  <Skeleton className="aspect-video w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </CardFooter>
              </Card>
            ))}

          {error && (
            <Card>
              <CardContent>
                <p>Ocorreu um erro ao carregar as competências</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
