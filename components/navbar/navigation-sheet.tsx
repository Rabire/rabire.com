import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="max-md:w-full max-md:max-w-none p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Logo />
          </div>

          <div className="px-2 py-2 overflow-y-auto flex-1">
            <NavMenu orientation="vertical" viewport={false} className="mt-1" />
          </div>

          <div className="mt-auto p-4 border-t space-y-3">
            <Button variant="outline" className="w-full rounded-full">
              Télécharger CV
            </Button>
            <Button className="w-full rounded-full" asChild>
              <Link href="#contact">Contactez-moi</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
