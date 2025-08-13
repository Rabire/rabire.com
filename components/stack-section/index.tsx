import Image from "next/image";
import Animated from "../animated";
import { Skill, SKILLS } from "./data";
import RotatingImages from "./rotating-images";

const FeatureVisual = ({ feature }: { feature: Skill }) => {
  if (feature.images && feature.images.length > 0) {
    const images = feature.images;

    if (images.length === 1) {
      return (
        <div className="relative h-24 aspect-square shrink-0 rounded-lg bg-muted overflow-hidden">
          <Image
            src={images[0]}
            alt={feature.title}
            fill
            sizes="96px"
            className="object-contain p-2"
            priority={false}
          />
        </div>
      );
    }

    return <RotatingImages images={images} alt={feature.title} />;
  }

  if (feature.icon) {
    const Icon = feature.icon;
    return (
      <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted flex items-center justify-center text-foreground/70">
        <Icon size={40} className="text-primary" />
      </div>
    );
  }

  return <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted" />;
};

const StackSection = () => {
  return (
    <section
      id="skills"
      className="screen-wrapper"
      aria-labelledby="skills-heading"
    >
      <Animated>
        <h2 className="title mb-12">Des compétences techniques et humaines</h2>
      </Animated>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {SKILLS.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-6 rounded-lg p-2 -mx-2 sm:mx-0 max-w-lg"
          >
            <FeatureVisual feature={feature} />
            <div className="">
              <span className="font-semibold tracking-tight text-lg">
                {feature.title}
              </span>
              <p className="mt-1 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
