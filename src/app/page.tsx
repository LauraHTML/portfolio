// export const metadata = {
//   title: "Início",
//   description: "Página inicial do portfólio.",
// };
"use client";
import { useState, useEffect } from "react";
import { getProjects } from "@/services/getProjects";
import { ProjectsT } from "@/lib/data";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [projects, setProjects] = useState<ProjectsT[]>();
  const [loading, setLoading] = useState(true);
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,oklch(0.290_0.270_299.5/0.15),transparent_50%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Disponível para estágio
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Olá, eu sou{" "}
              <span className="text-primary">{siteConfig.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projetos">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Ver projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contato">
                <Button
                  variant="outline"
                  className="rounded-full border-border/50"
                >
                  Entrar em contato
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="GitHub"
              >
                <FaGithubSquare className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl" />
            <Image
              width={640}
              height={763}
              src={"/img-hero.png"}
              alt="Ilustração de desenvolvedora trabalhando em aplicações web"
              className="relative z-10 rounded-3xl object-cover shadow-2xl shadow-primary/10"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Projetos em destaque
              </h2>
              <p className="mt-2 text-muted-foreground">
                Uma seleção dos meus projetos fullstack mais recentes.
              </p>
            </div>
            <Button variant="outline" className="rounded-full border-border/50">
              <Link href="/projects">Ver todos os projetos</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects !== undefined ? (
              projects
                .slice(0, 3)
                .map((project) => (
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
          </div>
          {error && (
            <div className="bg-card border p-2 rounded-md w-full m-4">
              <p>Ocorreu um erro ao carregar os projetos</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
