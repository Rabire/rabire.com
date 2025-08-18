import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav
      className="fixed top-6 inset-x-4 h-16 bg-background/70 backdrop-blur-sm border z-20 dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Link href="/" className="ml-4" aria-label="Accueil">
          <Logo size="md" />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
            asChild
          >
            <Link
              href="/coucou"
              target="_blank"
              aria-label="Ouvrir mon CV .pdf dans un nouvel onglet"
            >
              .pdf
            </Link>
          </Button>
          <Button className="rounded-full" asChild>
            <Link href="#contact" aria-label="Aller à la section contact">
              Contactez-moi
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
