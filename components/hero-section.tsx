import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Animated from "./animated";

const HeroSection = () => {
  const outlineActions = [
    {
      key: "linkedin",
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/rabire-hakim",
    },
    {
      key: "github",
      Icon: Github,
      href: "https://github.com/rabire",
    },
    { key: "phone", Icon: Phone, href: "tel:+33652789907" },
  ];

  return (
    <div className="screen-wrapper grid lg:grid-cols-2 gap-12 mb-40 lg:mb-70 mt-32 lg:mt-80">
      <div>
        <Badge className="rounded-full py-1 px-6 text-sm">
          Je recherche un CDI
          <span className="aspect-square bg-background animate-ping ml-4 rounded-full w-1.5 h-1.5"></span>
        </Badge>

        <Animated dir="right">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            Rabire HAKIM
            <br />
            Développeur fullstack
          </h1>
        </Animated>

        <p className="mt-6 max-w-[60ch] text-lg">
          Mes grands-parents disent que je travaille &quot;dans les
          ordinateurs&quot;. Je ne sais pas ce que ça veut dire, mais ça a
          l&apos;air impressionnant.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="rounded-full text-base px-8 contact-peer"
            asChild
          >
            <Link href="#contact">Me contacter</Link>
          </Button>

          <div className="flex items-center justify-center gap-4">
            {outlineActions.map(({ key, Icon, href }) => (
              <Button
                key={key}
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none contact-peer"
                asChild
              >
                <Link href={href} target="_blank">
                  <Icon className="!h-5 !w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group flex justify-center">
        <div className="-z-10 absolute bottom-0 w-full aspect-video bg-accent/50 rounded-2xl max-h-[300px] min-h-2/3 lg:max-h-none" />

        <div className="grid justify-center">
          <Image
            src="/images/rabire-noflex.webp"
            alt="Rabire HAKIM"
            width={300}
            height={300}
            className="contact:hidden group-hover:hidden transition-opacity hero-noflex-animate-mobile"
          />

          <Image
            src="/images/rabire-flex.webp"
            alt="Rabire HAKIM"
            width={300}
            height={300}
            className="contact:block hidden group-hover:block transition-opacity hero-flex-animate-mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
