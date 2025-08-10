import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const CtaSection = () => {
  return (
    <section className="bg-foreground text-background py-20">
      <div className="screen-wrapper grid grid-cols-2 gap-4 items-center">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight">
          Prenons le temps de discuter.
        </h2>

        <div className="flex justify-center gap-4 w-full">
          <Button size="lg" className="p-6 !px-10 text-lg">
            <Mail className="size-5 mr-2" />
            Contactez-moi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
