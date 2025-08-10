import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 gap-6 min-h-[calc(100vh-130px)]">
      {/* left */}
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          RABIRE HAKIM
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Le développeur web qu&apos;il manque à votre équipe
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button>Contactez-moi</Button>
          <Button>Contactez-moi</Button>
          <Button>Contactez-moi</Button>
          <Button>Contactez-moi</Button>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center justify-center">
        <div className="bg-pink-400 rounded-4xl h-1/2 w-80"></div>
      </div>
    </section>
  );
};

export default HeroSection;
