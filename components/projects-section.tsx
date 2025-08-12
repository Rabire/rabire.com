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
import Link from "next/link";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  url: string;
  image: string;
};

const features: Feature[] = [
  {
    icon: Home,
    title: "Ecotransac",
    description:
      "Un réseau d'agent commerciaux indépendants en immobilier que j'ai co-fondé.",
    url: "https://recrutement.ecotransac.fr/outils",
    image: "/images/ecotransac.webp", // TODO: add image
  },
  {
    icon: Medal,
    title: "Runswap",
    description:
      "Une plateforme de revente en ligne de dossards de course que j'ai co-fondé aussi.",
    url: "https://runswap.co",
    image: "/images/runswap.webp", // TODO: add image
  },
  {
    icon: Bot,
    title: "Beink Dream",
    description:
      "Un outil qui permet de dessiner un croquis et de l'améliorer avec de l'IA.",
    url: "https://www.beink.fr",
    image: "/images/beink.webp", // TODO: add image
  },
  {
    icon: Dumbbell,
    title: "SPART",
    description: "Une application mobile qui encourage le sport en entreprise.",
    url: "https://www.spart.life",
    image: "/images/spart.webp", // TODO: add image
  },
  {
    icon: Brain,
    title: "Neurexpo",
    description:
      "Des mini-jeux autour des fonctions cognitives pour les étudiants.",
    url: "https://www.neurexpo.fr",
    image: "/images/isitech.webp", // TODO: add image
  },
  {
    icon: ChartColumnIcon,
    title: "Devboard",
    description: "Un outil de productivité pour les développeurs.",
    url: "https://devboard-murex.vercel.app",
    image: "/images/devboard.webp", // TODO: add image
  },
];

// TODO: modal content du projet

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="screen-wrapper"
      aria-labelledby="projects-heading"
    >
      <div className="text-center mb-12">
        <h2 className="title mb-4">
          Quelques-unes de mes réalisations et participations
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Un screenshot, c’est bien… mais chaque projet a beaucoup plus à
          raconter.
        </p>
      </div>

      <div className="w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Link key={feature.title} href={feature.url} target="_blank">
              <Card className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 hover-card-border">
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
            </Link>
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
