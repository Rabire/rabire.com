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
      "Easily uncover untapped areas to explore and expand your reach effortlessly.",
  },
  {
    icon: Medal,
    title: "Runswap",
    description:
      "Create valuable content that resonates, inspires trust, and positions you as an expert.",
  },
  {
    icon: Bot,
    title: "Beink Dream",
    description:
      "Gain immediate, actionable insights with a quick glance, enabling fast decision-making.",
  },
  {
    icon: Dumbbell,
    title: "SPART",
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    icon: Brain,
    title: "Neurexpo",
    description:
      "Streamline your processes by automating repetitive tasks, saving time and reducing effort.",
  },
  {
    icon: ChartColumnIcon,
    title: "Devboard",
    description:
      "Supercharge your growth by implementing strategies that drive results quickly and efficiently.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="screen-wrapper"
      aria-labelledby="projects-heading"
    >
      <h2 className="text-5xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-2xl sm:text-center sm:mx-auto">
        Quelques une des mes réalisations et participations
      </h2>

      <div className="mt-12 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 hover:border-primary/50 transition-border duration-300"
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
