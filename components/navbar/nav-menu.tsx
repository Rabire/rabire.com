import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

export const NAV_ITEMS = [
  { label: "À propos", href: "about" },
  { label: "Projets", href: "projects" },
  { label: "Compétences", href: "skills" },
  { label: "Témoignages", href: "testimonials" },
];

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
  closeOnClick?: boolean;
};

export const NavMenu = ({ closeOnClick, ...props }: NavMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {NAV_ITEMS.map((item) => {
        const linkNode = (
          <Link
            key={item.href}
            href={`#${item.href}`}
            className={cn(
              "relative transition-colors duration-200 font-medium text-foreground/70 hover:text-foreground/100 hover:[&>span]:opacity-100",
              // Desktop default
              "text-sm p-3",
              // Mobile touch targets and spacing
              "max-md:text-base max-md:px-4 max-md:py-3 max-md:w-full"
            )}
          >
            {item.label}

            {/* dot */}
            <span
              className={cn(
                "absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 transition-opacity duration-200",
                // Hide dot on mobile layout
                "max-md:hidden"
              )}
            />
          </Link>
        );

        return closeOnClick ? (
          <SheetClose asChild key={item.href}>
            {linkNode}
          </SheetClose>
        ) : (
          linkNode
        );
      })}
    </NavigationMenuList>
  </NavigationMenu>
);
