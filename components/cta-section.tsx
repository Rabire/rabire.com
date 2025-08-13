import { Mail } from "lucide-react";
import Link from "next/link";
import Animated from "./animated";
import { Button } from "./ui/button";

const CtaSection = () => {
  return (
    <section className="bg-foreground text-background py-20">
      <div className="screen-wrapper grid md:grid-cols-2 items-center gap-12">
        <Animated dir="right">
          <h2 className="title text-center">Prenons le temps de discuter.</h2>
        </Animated>

        <div className="flex justify-center gap-4 w-full">
          <Button size="lg" className="p-6 !px-10 text-lg" asChild>
            <Link href="#contact">
              <Mail className="size-5 mr-2" />
              Contactez-moi
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
