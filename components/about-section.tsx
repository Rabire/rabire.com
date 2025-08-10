import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FootprintsIcon,
  GraduationCapIcon,
  HandshakeIcon,
  RocketIcon,
  SearchIcon,
  ToolCaseIcon,
} from "lucide-react";

const features = [
  {
    icon: HandshakeIcon,
    title: "Qui je suis en bref",
    description:
      "Je suis Rabire. Quand on me demande de me présenter, je réponds souvent que si je ne suis pas à la salle de sport, je suis certainement entrain de coder.",
  },
  {
    icon: GraduationCapIcon,
    title: "Ma formation",
    description:
      "Diplômé d’un Mastère Expert en Systèmes d’Information à Isitech, je combine expertise technique et compréhension stratégique des projets informatiques.",
  },
  {
    icon: ToolCaseIcon,
    title: "Mes outils du moment",
    description:
      "Je développe principalement en Typescript (React, Node.js). Toujours à l’affût des nouveautés, notamment dans le Web et l’IA. Ma goto stack est juste à coté.",
  },
  {
    icon: FootprintsIcon,
    title: "Un parcours qui fait la différence",
    description:
      "Boost audience engagement with interactive features like polls, quizzes, and forms.",
  },
  {
    icon: RocketIcon,
    title: "Ce que j’apporte vraiment",
    description:
      "Je n’ai jamais raté une deadline, et je n’ai pas l’intention de commencer maintenant. C’est mon petit défi personnel : livrer toujours à temps, sans jamais sacrifier la qualité du travail.",
  },
  {
    icon: SearchIcon,
    title: "Ce que je cherche",
    description:
      "Aujourd’hui, je cherche à rejoindre une équipe où je pourrai mettre à profit mon expertise technique et mon sens du travail bien fait, sur des projets ambitieux.",
  },
];

const AboutSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg">
          Le code, c&apos;est bien.
          <br />
          Mais qui tape dessus ?
        </h2>
        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Icon />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
