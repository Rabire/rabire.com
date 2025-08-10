"use client";

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
import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    icon: HandshakeIcon,
    title: "Qui je suis en bref",
    description:
      "Je suis Rabire. Quand on me demande de me présenter, je réponds souvent que si je ne suis pas à la salle de sport, je suis certainement entrain de coder.",
    image: "/profile-intro.jpg",
    alt: "Portrait de Rabire, développeur passionné",
    id: "introduction",
  },
  {
    icon: GraduationCapIcon,
    title: "Ma formation",
    description:
      "Diplômé d'un Mastère Expert en Systèmes d'Information à Isitech, je combine expertise technique et compréhension stratégique des projets informatiques.",
    image: "/education.jpg",
    alt: "Formation en développement et systèmes d'information",
    id: "formation",
  },
  {
    icon: ToolCaseIcon,
    title: "Mes outils du moment",
    description:
      "Je développe principalement en Typescript (React, Node.js). Toujours à l'affût des nouveautés, notamment dans le Web et l'IA. Ma goto stack est juste à coté.",
    image: "/tech-stack.jpg",
    alt: "Stack technique TypeScript, React, Node.js",
    id: "outils",
  },
  {
    icon: FootprintsIcon,
    title: "Un parcours qui fait la différence",
    description:
      "J’ai rapidement occupé des postes de lead tech, puis cofondé des projets. Cela m’a permis d’être à la fois quelqu’un qui livre efficacement et un vrai partenaire pour les équipes.",
    image: "/journey.jpg",
    alt: "Parcours professionnel et expériences",
    id: "parcours",
  },
  {
    icon: RocketIcon,
    title: "Ce que j'apporte vraiment",
    description:
      "Je n'ai jamais raté une deadline, et je n'ai pas l'intention de commencer maintenant. C'est mon petit défi personnel : livrer toujours à temps, sans jamais sacrifier la qualité du travail.",
    image: "/value-proposition.jpg",
    alt: "Valeur ajoutée et engagement qualité",
    id: "valeur-ajoutee",
  },
  {
    icon: SearchIcon,
    title: "Ce que je cherche",
    description:
      "Aujourd'hui, je cherche à rejoindre une équipe où je pourrai mettre à profit mon expertise technique et mon sens du travail bien fait, sur des projets ambitieux.",
    image: "/goals.jpg",
    alt: "Objectifs professionnels et projets recherchés",
    id: "objectifs",
  },
];

const AboutSection = () => {
  const [activeItem, setActiveItem] = useState("item-0");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleItemInteraction = (itemValue: string) => {
    if (isMobile) {
      // Sur mobile, toggle l'item (ferme si déjà ouvert, ouvre sinon)
      setActiveItem(activeItem === itemValue ? "" : itemValue);
    } else {
      // Sur desktop, ouvre directement au hover
      setActiveItem(itemValue);
    }
  };

  return (
    <section
      className="flex items-center justify-center"
      aria-labelledby="about-heading"
    >
      <div className="max-w-screen-xl w-full px-6">
        <header>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-lg"
          >
            Le code, c&apos;est bien.
            <br />
            Mais qui tape dessus ?
          </h2>
        </header>

        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion value={activeItem} type="single" className="w-full">
              {features.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                  onMouseEnter={() =>
                    !isMobile && handleItemInteraction(`item-${index}`)
                  }
                  onClick={() =>
                    isMobile && handleItemInteraction(`item-${index}`)
                  }
                >
                  <AccordionTrigger
                    className={`text-lg [&>svg]:hidden ${
                      isMobile ? "cursor-pointer" : "pointer-events-none"
                    }`}
                    aria-expanded={activeItem === `item-${index}`}
                    aria-controls={`content-${index}`}
                    id={`trigger-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon aria-hidden="true" />
                      <span>{title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[17px] leading-relaxed text-muted-foreground"
                    id={`content-${index}`}
                    aria-labelledby={`trigger-${index}`}
                  >
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl overflow-hidden relative">
                      <Image
                        src={
                          features[parseInt(activeItem.split("-")[1]) || 0]
                            .image
                        }
                        alt={
                          features[parseInt(activeItem.split("-")[1]) || 0].alt
                        }
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl overflow-hidden relative min-h-[400px]">
            {features.map(({ image, alt }, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeItem === `item-${index}` ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
