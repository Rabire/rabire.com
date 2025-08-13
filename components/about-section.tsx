import Animated from "@/components/animated";
import {
  FootprintsIcon,
  GraduationCapIcon,
  HandshakeIcon,
  RocketIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: HandshakeIcon,
    title: "En bref",
    details:
      "Je suis Rabire. Quand on me demande de me présenter, je réponds souvent que si je ne suis pas à la salle de sport, je suis certainement en train de programmer.",
    image: "/images/rabire.webp",
  },
  {
    icon: GraduationCapIcon,
    title: "Ma formation",
    details:
      "Diplômé d'un Mastère Expert en Systèmes d'Information et d'un Bachelor Responsable de Projet Informatique, ces 5 années d'alternance à école Isitech ont permis l'acquisition d'une solide expertise technique et d'une vision stratégique des projets informatiques.",
    image: "/images/isitech.webp",
  },
  {
    icon: FootprintsIcon,
    title: "Mon parcours",
    details:
      "J'ai rapidement occupé des postes de lead tech en mission ou sur des projets internes en ESN. J'ai également co-fondé des projets avec la casquette de CTO. Cela m'a permis d'apporter une expertise technique solide tout en comprenant parfaitement les enjeux business.",
    image: "/images/roue.webp",
  },
  {
    icon: RocketIcon,
    title: "Ce qui fait la différence",
    details:
      "Tenir mes délais, c’est mon petit plaisir coupable. Ça me rassure et ça rend tout le monde content.",
    // "Je n'ai jamais raté une deadline, et je n'ai pas l'intention de commencer maintenant. C'est mon petit défi personnel : livrer toujours à temps en se concentrant sur ce qui compte vraiment.",
    image: "/images/remote-work.webp",
  },
  {
    icon: SearchIcon,
    title: "Et aujourd'hui ?",
    details:
      "Marseille j'arrive ! J'aimerais rejoindre une équipe dans laquelle je peux mettre à profit mon expertise technique et mon sens du travail bien fait, sur des projets ambitieux.",
    image: "/images/marseille.webp",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="screen-wrapper"
      aria-labelledby="about-heading"
    >
      <Animated>
        <h2 id="about-heading" className="title mb-12">
          Le code c&apos;est bien,
          <br />
          mais qui l&apos;écrit ?
        </h2>
      </Animated>

      <div className="w-full mx-auto space-y-20">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-xl"
                />
              </div>

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
