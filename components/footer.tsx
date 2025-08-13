import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import FooterCallbackForm from "./footer-callback-form";
import Logo from "./logo";
import { NAV_ITEMS } from "./navbar/nav-menu";

const items = [
  ...NAV_ITEMS.slice(0, -1),
  { label: "Contact", href: "contact" },
];

const Footer = () => {
  return (
    <footer className="screen-wrapper">
      <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6">
        <div>
          <Logo size="lg" />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {items.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={`#${href}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Callback request */}
        <div className="max-w-xs w-full">
          <h6 className="font-semibold">Laissez moi vous rappeler</h6>
          <FooterCallbackForm />
        </div>
      </div>

      <Separator />

      <div className="p-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Rabire HAKIM. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
