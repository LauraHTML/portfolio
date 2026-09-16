export const metadata = {
  title: "Contato",
  description: "Entre em contato .",  
};

import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Contato</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tem uma oportunidade de estágio ou quer trocar uma ideia? Me envie uma mensagem!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-card-foreground">Informações de contato</h2>
              <p className="mt-4 text-muted-foreground">
                Fico feliz em conversar sobre oportunidades, projetos ou qualquer assunto relacionado a tecnologia.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-card-foreground">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FaLinkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-card-foreground">linkedin.com/in/laura-sampaio-neves</p>
                  </div>
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FaGithubSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-card-foreground">github.com/LauraHTML</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p className="font-medium text-card-foreground">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
