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
    title: "En bref",
    details:
      "Je suis Rabire. Quand on me demande de me présenter, je réponds souvent que si je ne suis pas à la salle de sport, je suis certainement en train de coder.",
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
      "J'ai rapidement occupé des postes de lead tech en mission ou sur des projets internes en ESN. J'ai également co-fondé des projets avec la casquette de CTO. Cela m'a permis d'apporter une expertise technique solide tout en comprenant parfaitement les enjeux business.",
  },
  {
    icon: RocketIcon,
    title: "Ce qui fait la différence",
    details:
      "Je n'ai jamais raté une deadline, et je n'ai pas l'intention de commencer maintenant. C'est mon petit défi personnel : livrer toujours à temps en se concentrant sur ce qui compte vraiment.",
  },
  {
    icon: SearchIcon,
    title: "Et aujourd'hui ?",
    details:
      "J'aimerais rejoindre une équipe dans laquelle je peux mettre à profit mon expertise technique et mon sens du travail bien fait, sur des projets ambitieux.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="screen-wrapper">
      <h2 className="title">
        Le code c&apos;est bien,
        <br />
        mais qui l&apos;écrit ?
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
