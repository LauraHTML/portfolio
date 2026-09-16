import { DatabaseCheck, LayoutDashboard, Braces, Toolbox} from 'lucide-react';

export const siteConfig = {
  name: "Laura Sampaio",
  role: "Estudante de Engenharia de Software",
  headline: "Desenvolvedora Fullstack em formação",
  description:
    "Estudante de Engenharia de Software buscando uma vaga de estágio. Apaixonada por construir aplicações web completas, do front-end ao back-end.",
  email: "sampaiolaura55@gmail.com",
  github: "https://github.com/LauraHTML?tab=repositories",
  linkedin: "https://www.linkedin.com/in/laura-sampaio-neves/",
  location: "São Paulo, Brasil",
};

export interface ProjectsT {
  id: string,
  nome: string,
	descricao: string,
	imagem: string,
	competencias: {
      backend: [],
      frontend:[],
      banco:[]
    },
	repositorio: string,
	demo: string
}

export interface TechnologiesT {
  icone: string,
  category: string,
  items: string[],
}

export const aboutData = {
  bio: "Sou estudante de Engenharia de Software e estou em busca da minha primeira oportunidade de estágio. Tenho experiência prática com desenvolvimento fullstack, criando aplicações web modernas com React, Node.js e bancos de dados SQL/NoSQL.",
  education: [
    {
      degree: "Técnico em Analíse e Desenvolvimento de Sistemas",
      institution: "SENAI",
      period: "2024 - 2025",
    },
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "FIAP -Faculdade de Informática e Administração Paulista",
      period: "2026 - 2029",
    },
  ],
  goals:
    "Meu objetivo é atuar como estagiária em desenvolvimento web, contribuindo em projetos reais enquanto aprimoro minhas habilidades técnicas e aprendo com profissionais experientes.",
};

