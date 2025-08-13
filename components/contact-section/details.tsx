import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const DETAILS = [
  {
    icon: Mail,
    title: "Email",
    description: "contact@rabire.com",
    href: "mailto:contact@rabire.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "06 52 78 99 07",
    href: "tel:+33652789907",
  },
  {
    icon: MapPin,
    title: "Localisation",
    description: "Marseille (dès janvier 2026)",
  },
];

const ContactDetails = () => {
  return (
    <div className="grid grid-rows-3 lg:col-span-1 gap-6">
      {DETAILS.map((detail) => (
        <Link
          href={detail.href ?? ""}
          className={cn(!detail.href && "pointer-events-none")}
          key={detail.title}
        >
          <Card className="hover-card-border h-full justify-center">
            <CardContent>
              <div className="flex items-center space-x-6 px-6">
                <div className="flex-shrink-0">
                  <detail.icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <CardTitle className="text-lg">{detail.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {detail.description}
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ContactDetails;
