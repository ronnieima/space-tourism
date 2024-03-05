import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent className="bg-transparent pr-0 backdrop-blur-2xl">
        <NavLinks inMobileNav className="flex flex-col gap-8 pl-8 pt-32" />
      </SheetContent>
    </Sheet>
  );
}
