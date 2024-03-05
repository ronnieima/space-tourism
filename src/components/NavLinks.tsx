import { links } from "@/config/content";
import { cn } from "@/utils/utils";
import { Link } from "@tanstack/react-router";
import { SheetClose } from "./ui/sheet";

type NavLinksProps = {
  className?: string;
  showNumbers?: boolean;
  inMobileNav?: boolean;
};

export default function NavLinks({
  className,
  showNumbers = true,
  inMobileNav = false,
}: NavLinksProps) {
  return (
    <ul className={cn(`w-full list-none`, className)}>
      {links.map((link, i) => {
        return (
          <li
            key={link.label}
            className={cn(
              "my-auto h-full w-full text-white",
              "hover:border-r-[3px] hover:border-white/50",
            )}
          >
            {inMobileNav ? (
              <SheetClose asChild>
                <Link
                  to={link.href}
                  className="flex h-full items-center gap-2 font-barlow_condensed text-[16px] uppercase tracking-[2.7px] hover:border-white/50"
                  activeProps={{
                    className:
                      "border-r-[3px] border-white hover:border-r-0 hover:border-white/50",
                  }}
                >
                  <span
                    className={cn("hidden font-bold", {
                      block: showNumbers,
                    })}
                  >
                    {i.toString().padStart(2, "0")}
                  </span>
                  <span>{link.label}</span>
                </Link>
              </SheetClose>
            ) : (
              <Link
                to={link.href}
                className="flex h-full items-center gap-2 font-barlow_condensed text-[16px] uppercase tracking-[2.7px]"
                activeProps={{
                  className: "border-collapse border-b-[3px] border-white",
                }}
              >
                <span
                  className={cn("hidden font-bold", {
                    block: showNumbers,
                  })}
                >
                  {i.toString().padStart(2, "0")}
                </span>
                <span>{link.label}</span>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
