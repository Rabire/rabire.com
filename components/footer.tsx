import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { NAV_ITEMS } from "./navbar/nav-menu";

const Footer = () => {
  return (
    <footer className="screen-wrapper">
      <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6">
        <div>
          <div className="font-bold text-2xl">TODO: LOGO</div>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div className="max-w-xs w-full">
          <h6 className="font-semibold">Laissez moi vous rappeler</h6>
          <form className="mt-4 flex items-center gap-2">
            <Input type="tel" placeholder="Votre numéro de téléphone" />
            <Button>Envoyer</Button>
          </form>
        </div>
      </div>

      <Separator />

      <div className="p-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Rabire HAKIM. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
