import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  ChartColumnIcon,
  Dumbbell,
  Home,
  Medal,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Home,
    title: "Ecotransac",
    description:
      "Un réseau d'agent commerciaux indépendants en immobilier que j'ai co-fondé.",
  },
  {
    icon: Medal,
    title: "Runswap",
    description:
      "Une plateforme de revente en ligne de dossards de course que j'ai co-fondé aussi.",
  },
  {
    icon: Bot,
    title: "Beink Dream",
    description:
      "Un outil qui permet de dessiner un croquis et de l'améliorer avec de l'IA.",
  },
  {
    icon: Dumbbell,
    title: "SPART",
    description: "Une application mobile qui encourage le sport en entreprise.",
  },
  {
    icon: Brain,
    title: "Neurexpo",
    description:
      "Des mini-jeux autour des fonctions cognitives pour les étudiants.",
  },
  {
    icon: ChartColumnIcon,
    title: "Devboard",
    description: "Un outil de productivité pour les développeurs.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="screen-wrapper"
      aria-labelledby="projects-heading"
    >
      <h2 className="title mb-12">
        Quelques une des mes réalisations et participations
      </h2>

      <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 hover-card-border"
            >
              <CardHeader>
                <Icon className="h-6 w-6 text-primary" />
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>

              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-12 text-center text-muted-foreground max-w-2xl mx-auto">
        Vous trouverez ici une sélection de mes projets accessibles
        publiquement. D’autres, tout aussi intéressants, restent confidentiels
        ou réservés à des environnements privés.
      </p>
    </section>
  );
};

export default ProjectsSection;
