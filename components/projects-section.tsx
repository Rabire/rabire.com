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
import Image from "next/image";
import Link from "next/link";
import Animated from "./animated";

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
      "Un réseau d'agent commerciaux indépendants en immobilier que j'ai co-fondé. L'application Nestor est utilisé par une dizaine de technophiles tout les jours.",
    url: "https://recrutement.ecotransac.fr/outils",
    image: "/images/ecotransac.webp",
  },
  {
    icon: Medal,
    title: "Runswap",
    description:
      "Une plateforme de revente en ligne de dossards de course que j'ai co-fondé aussi. Des milliers de visiteurs uniques chaque mois.",
    url: "https://runswap.co",
    image: "/images/runswap.webp",
  },
  {
    icon: Bot,
    title: "Beink Dream",
    description:
      "Un outil qui permet de dessiner un croquis et de l'améliorer avec de l'IA. Mon POC à levé 500k dans l'émission Qui veut être mon associé sur M6 !",
    url: "https://www.beink.fr",
    image: "/images/beink.webp",
  },
  {
    icon: Dumbbell,
    title: "SPART",
    description:
      "Une application mobile qui encourage le sport en entreprise. Une super DA et une appli qui tien debout comme la tour Eiffel !",
    url: "https://www.spart.life",
    image: "/images/spart.webp",
  },
  {
    icon: Brain,
    title: "Neurexpo",
    description:
      "Des mini-jeux autour des fonctions cognitives pour les étudiants. Imaginé, codé et publié en 2 jours.",
    url: "https://www.neurexpo.fr",
    image: "/images/neurexpo.webp",
  },
  {
    icon: ChartColumnIcon,
    title: "Devboard",
    description:
      "Un outil de productivité pour les développeurs. Il s'agit d'un concours de dev sur Youtube (que j'ai gagné évidemment).",
    url: "https://devboard-murex.vercel.app",
    image: "/images/devboard.webp",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="screen-wrapper"
      aria-labelledby="projects-heading"
    >
      <div className="text-center mb-12">
        <Animated>
          <h2 className="title mb-4">
            Quelques-unes de mes réalisations et participations
          </h2>
        </Animated>
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
              <Card className="group h-full flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 hover-card-border">
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
                  <div className="bg-muted aspect-video ml-6 rounded-tl-xl relative overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover rounded-tl-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
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
