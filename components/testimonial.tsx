import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Steve Jobs",
    company: "Apple",
    testimonial:
      "L’iPhone ? Honnêtement c’était son idée. Moi j’ai juste mis la pomme.",
  },
  {
    id: 3,
    name: "Elon Musk",
    company: "Tesla, OpenAI, SpaceX, X, blablabla",
    testimonial:
      "Il m’a parler de voitures électriques. J’ai trouvé ça bizarre, mais j’ai fini par le faire.",
  },
  {
    id: 2,
    name: "Bill Gates",
    company: "Microsoft",
    testimonial: "Il m’a appris à utiliser Git… en 5 minutes. J’en ai pleuré.",
  },
];

const Testimonial = () => (
  <section className="screen-wrapper">
    <h2 className="title mb-12">Témoignages 100% vérifiés par personne</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <CardHeader className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{testimonial.name}</CardTitle>
              <CardDescription>{testimonial.company}</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-[17px]">{testimonial.testimonial}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Testimonial;
