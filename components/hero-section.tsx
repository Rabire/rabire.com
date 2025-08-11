import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="screen-wrapper grid lg:grid-cols-2 gap-12 mb-40 lg:mb-70 mt-32 lg:mt-80">
      <div>
        <Badge className="rounded-full py-1 px-6 text-sm">
          Je recherche un CDI !
          <span className="aspect-square bg-background animate-ping ml-4 rounded-full w-1.5 h-1.5"></span>
        </Badge>
        <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          Rabire HAKIM
          <br />
          Développeur fullstack
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg">
          Mes grands-parents disent que je travaille &quot;dans les
          ordinateurs&quot;. Je ne sais pas ce que ça veut dire, mais ça a
          l&apos;air impressionnant.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Me contacter <ArrowRight className="!h-5 !w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Linkedin className="!h-5 !w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Github className="!h-5 !w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
            asChild
          >
            <Link href="tel:+33652789907">
              <Phone className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full aspect-video bg-accent rounded-xl" />
    </div>
  );
};

export default HeroSection;
