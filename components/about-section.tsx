import {
  FootprintsIcon,
  GraduationCapIcon,
  HandshakeIcon,
  RocketIcon,
  SearchIcon,
} from "lucide-react";

const features = [
  {
    icon: HandshakeIcon,
    title: "Qui je suis en bref",
    details:
      "Je suis Rabire. Quand on me demande de me présenter, je réponds souvent que si je ne suis pas à la salle de sport, je suis certainement entrain de coder.",
  },
  {
    icon: GraduationCapIcon,
    title: "Ma formation",
    details:
      "Diplômé d'un Mastère Expert en Systèmes d'Information à Isitech, je combine expertise technique et compréhension stratégique des projets informatiques.",
  },
  {
    icon: FootprintsIcon,
    title: "Mon parcours",
    details:
      "J'ai rapidement occupé des postes de lead tech, puis cofondé des projets. Cela m'a permis d'être à la fois quelqu'un qui livre efficacement et un vrai partenaire pour les équipes.",
  },
  {
    icon: RocketIcon,
    title: "Ce que j'apporte vraiment",
    details:
      "Je n'ai jamais raté une deadline, et je n'ai pas l'intention de commencer maintenant. C'est mon petit défi personnel : livrer toujours à temps en se concentrant sur ce qui compte vraiment.",
  },
  {
    icon: SearchIcon,
    title: "Ce que je recherche",
    details:
      "Aujourd'hui, j'aimerais rejoindre une équipe où je pourrai mettre à profit mon expertise technique et mon sens du travail bien fait, sur des projets ambitieux.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="screen-wrapper">
      <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
        Le code, c&apos;est bien.
        <br />
        Mais qui tape dessus ?
      </h2>
      <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0">
                <div className="flex items-center gap-x-4">
                  <Icon className="size-8 text-primary" />
                  <h4 className="my-3 text-3xl font-semibold tracking-tight">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
