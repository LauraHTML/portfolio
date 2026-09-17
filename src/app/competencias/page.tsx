// export const metadata = {
//   title: "Competências",
//   description: "Tecnologias e ferramentas que ${siteConfig.name} domina.",
// };
"use client";
import { SkillCard } from "@/components/SkillCard";
import { useState, useEffect } from "react";
import { getTechnologies } from "@/services/getTechnologies";
import { TechnologiesT } from "@/lib/data";

import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkillsPage() {
  const [technologies, setTechnologies] = useState<TechnologiesT[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const technologiesList = async () => {
      try {
        setLoading(true);
        const response = await getTechnologies();
        setTechnologies(response);
      } catch (err: any) {
        setLoading(false);
        setError(err);
        console.error(`Erro ao buscar competências: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    technologiesList();
  }, []);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Competências
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver
            aplicações web.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies !== undefined ? (
            technologies.map((skill) => (
              <SkillCard key={skill.category} {...skill} icon={Star} />
            ))
          ) : (
            <p>Erro ao buscar competências do banco de dados</p>
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
          <Card>
            <CardContent>
              <p>Ocorreu um erro ao carregar as competências</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
