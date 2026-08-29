export const metadata = {
  title: "Competências",
  description: "Tecnologias e ferramentas que ${siteConfig.name} domina.",  
};

import { skills } from "@/lib/data";
import { SkillCard } from "@/components/SkillCard";


export default function SkillsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Competências</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver aplicações web.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.category} {...skill} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
