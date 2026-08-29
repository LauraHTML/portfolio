import { DatabaseCheck, LayoutDashboard, Braces, Toolbox} from 'lucide-react';

export const siteConfig = {
  name: "Laura Sampaio",
  role: "Estudante de Engenharia de Software",
  headline: "Desenvolvedora Fullstack em formação",
  description:
    "Estudante de Engenharia de Software buscando uma vaga de estágio. Apaixonada por construir aplicações web completas, do front-end ao back-end.",
  email: "laura.sampaio@email.com",
  github: "https://github.com/laurasampaio",
  linkedin: "https://linkedin.com/in/laurasampaio",
  location: "São Paulo, Brasil",
};

export const aboutData = {
  bio: "Sou estudante de Engenharia de Software e estou em busca da minha primeira oportunidade de estágio. Tenho experiência prática com desenvolvimento fullstack, criando aplicações web modernas com React, Node.js e bancos de dados SQL/NoSQL.",
  education: [
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "Universidade Exemplo",
      period: "2023 - 2027",
    },
  ],
  goals:
    "Meu objetivo é atuar como estagiária em desenvolvimento web, contribuindo em projetos reais enquanto aprimoro minhas habilidades técnicas e aprendo com profissionais experientes.",
};

export const projects = [
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Aplicação de gerenciamento de tarefas com autenticação, drag-and-drop e persistência em banco de dados.",
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma"],
    demoUrl: "#",
    repoUrl: "#",
    image: "/images/project-task-manager.jpg",
  },
  {
    id: "ecommerce-api",
    title: "E-commerce API",
    description:
      "API RESTful completa para e-commerce com cadastro de produtos, carrinho, pedidos e integração de pagamentos.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "#",
    repoUrl: "#",
    image: "/images/project-ecommerce.jpg",
  },
  {
    id: "portfolio-dashboard",
    title: "Portfolio Dashboard",
    description:
      "Dashboard interativo para acompanhamento de investimentos com gráficos em tempo real e relatórios.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    demoUrl: "#",
    repoUrl: "#",
    image: "/images/project-dashboard.jpg",
  },
];

export const repositories = [
  {
    id: 1,
    name: "task-manager",
    description: "Gerenciador de tarefas fullstack com autenticação e drag-and-drop.",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    url: "#",
  },
  {
    id: 2,
    name: "ecommerce-api",
    description: "API RESTful para e-commerce com Node.js, Express e MongoDB.",
    language: "JavaScript",
    stars: 8,
    forks: 2,
    url: "#",
  },
  {
    id: 3,
    name: "portfolio-dashboard",
    description: "Dashboard de investimentos com Next.js e gráficos interativos.",
    language: "TypeScript",
    stars: 5,
    forks: 1,
    url: "#",
  },
  {
    id: 4,
    name: "python-automation",
    description: "Scripts de automação para tarefas repetitivas e análise de dados.",
    language: "Python",
    stars: 3,
    forks: 0,
    url: "#",
  },
];

export const skills = [
  {
    icon: LayoutDashboard,
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Braces,
    category: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    icon: DatabaseCheck,
    category: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "Prisma", "SQL"],
  },
  {
    icon: Toolbox,
    category: "Ferramentas",
    items: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Linux"],
  },
];
