import { CheckCheck, Clock, LucideIcon, Users } from "lucide-react";

export type Skill = {
  title: string;
  description: string;
  icon?: LucideIcon;
  images?: string[];
};

export const SKILLS: Skill[] = [
  {
    title: "TypeScript & JavaScript",
    description:
      "D'ailleurs j'ai écris mon mémoire de fin d'études sur le choix du \"meilleur language\" (et j'ai eu 19)",
    images: ["/images/ts.webp", "/images/js.webp"],
  },
  {
    title: "React & Next.js",
    description:
      "J'ai choisis React à Vue.js ou Angular, et je n'ai jamais regretté.",
    images: [
      "/images/react.webp", // FIXME: missong
      "/images/nextjs.webp",
    ],
  },
  {
    title: "Node.js",
    description:
      "Le plus impressionnant c'est que je comprends à peu près ce qu'il se passe dans le tsconfig.",
    images: ["/images/nodejs.webp"], // FIXME: rm bg
  },
  {
    title: "GraphQL & REST APIs",
    description:
      "Je peux concevoir et consommer des APIs efficaces et robustes fingers in the nose.",
    images: ["/images/graphql.webp"], // FIXME: rm bg
  },
  {
    title: "Bases de données (PostgreSQL, MongoDB)",
    description:
      "À l'aise avec les BD relationnelles et non-relationnelles (ainsi que les BaaS)",
    images: [
      "/images/psql.webp",
      "/images/mongodb.webp", // FIXME: rm bg
      "/images/supabase.webp", // FIXME: rm bg
      "/images/firebase.webp", // FIXME: rm bg
    ],
  },
  {
    title: "Cloud / DevOps (AWS, Docker, CI/CD)",
    description:
      "Deployer, gérer les environnements, optimiser, sécuriser ça me connais bien.",
    images: [
      "/images/docker.webp", // FIXME: missing
      "/images/aws.webp",
      "/images/github.webp",
    ],
  },

  {
    title: "Teamwork",
    description:
      "En anglais ou en français, à l'écrit ou à l'oral. En plus je suis super sympa ! (enfin je crois)",
    icon: Users,
  },
  {
    title: "Gestion du temps & priorisation",
    description: "Pareto lui-même s'est inspiré de mes méthodes de travail !",
    icon: Clock,
  },
  {
    title: "Réactivité, initiative et rigueur",
    description: "Je m'efforce à être aussi fiable que le code que je produis.",
    icon: CheckCheck,
  },
];
