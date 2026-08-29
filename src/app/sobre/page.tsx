export const metadata = {
  title: "Sobre",
  description: "Conheça mais.",  
};

import { GraduationCap, Target, User } from "lucide-react";
import { aboutData, siteConfig } from "@/lib/data";
import Image from 'next/image';


export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Sobre mim</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Conheça um pouco da minha trajetória e do que me motiva a seguir na área de tecnologia.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
            <Image
              width={830}
              height={830}
              src={'/img-sobre.png'}
              alt="Foto de Laura Sampaio"
              className="relative z-10 w-full rounded-3xl object-cover shadow-xl shadow-primary/10"
            />
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <User className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-card-foreground">Quem sou</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{aboutData.bio}</p>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-card-foreground">Formação</h2>
              <div className="mt-4 space-y-4">
                {aboutData.education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                    <h3 className="font-display font-semibold text-card-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-card-foreground">Objetivos</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{aboutData.goals}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
