const features = [
  {
    title: "TypeScript & JavaScript",
    description:
      "D'ailleurs j'ai écris mon mémoire de fin d'études sur le choix du \"meilleur language\" (et j'ai eu 19)",
  },
  {
    title: "React & Next.js",
    description:
      "J'ai choisis React à Vue.js ou Angular, et je n'ai jamais regretté.",
  },
  {
    title: "Node.js",
    description:
      "Le plus impressionnant c'est que je comprends à peu près ce qu'il se passe dans le tsconfig.",
  },
  {
    title: "GraphQL & REST APIs",
    description:
      "Je peux concevoir et consommer des APIs efficaces et robustes fingers in the nose.",
  },
  {
    title: "Bases de données (PostgreSQL, MongoDB)",
    description:
      "À l'aise avec les BD relationnelles et non-relationnelles (ainsi que les BaaS)",
  },
  {
    title: "Cloud / DevOps (AWS, Docker, CI/CD)",
    description:
      "Deployer, gérer les environnements, optimiser, sécuriser ça me connais bien.",
  },

  {
    title: "Teamwork",
    description:
      "En anglais ou en français, à l'écrit ou à l'oral. En plus je suis super sympa ! (enfin je crois)",
  },
  {
    title: "Gestion du temps & priorisation",
    description: "Pareto lui-même s'est inspiré de mes méthodes de travail !",
  },
  {
    title: "Réactivité, initiative et rigueur",
    description: "Je m'efforce à être aussi fiable que le code que je produis.",
  },
];

const StackSection = () => {
  return (
    <section
      id="skills"
      className="screen-wrapper"
      aria-labelledby="skills-heading"
    >
      <h2 className="title">Des compétences techniques et humaines</h2>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex gap-6 rounded-lg p-2 -mx-2 sm:mx-0 max-w-lg"
          >
            <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted" />
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
