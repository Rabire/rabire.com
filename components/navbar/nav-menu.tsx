import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NAV_ITEMS = [
  { label: "À propos", href: "about" },
  { label: "Projets", href: "projects" },
  { label: "Compétences", href: "skills" },
  { label: "Contact", href: "contact" },
];

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={`#${item.href}`}
          className="text-sm p-3 font-medium relative transition-colors duration-200 text-foreground/70 hover:text-foreground/100 hover:[&>span]:opacity-100"
        >
          {item.label}

          {/* dot */}
          <span
            className={cn(
              "absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 transition-opacity duration-200"
            )}
          />
        </Link>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
