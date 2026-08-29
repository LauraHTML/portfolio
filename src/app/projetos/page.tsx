export const metadata = {
  title: "Projetos",
  description: "Explore os projetos criados.",  
};
import { projects, siteConfig } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";


export default function ProjectsPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Projetos</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Aplicações web completas que desenvolvi para praticar e demonstrar minhas habilidades fullstack.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
