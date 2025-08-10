import { ArrowRightIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="p-2 bg-foreground text-background rounded-full flex items-center justify-between gap-10">
      <Link
        href="/"
        className="font-display text-2xl ml-4 md:ml-10 mt-1 w-full"
      >
        Rabire
      </Link>

      <ul className="items-center gap-4 hidden md:flex whitespace-nowrap">
        <li>
          <Link href="#about">À propos</Link>
        </li>
        <li>
          <Link href="#projects">Mes projets</Link>
        </li>
        <li>
          <Link href="#stack">Mes technos</Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center justify-end gap-2 w-full">
        <Button variant="ghost">
          <span>.pdf</span>
        </Button>

        <Button variant="outline" className="group">
          <span>Contactez-moi</span>
          <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <Button variant="outline" className="group !px-4 md:hidden">
        <MenuIcon strokeWidth={3} />
      </Button>
    </header>
  );
};

export default Header;
