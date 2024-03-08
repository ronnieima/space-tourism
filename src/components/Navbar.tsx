import { useRouterState, Link, useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import MobileNav from "./MobileNav";
import { links } from "@/config/content";

export default function Navbar() {
  const { location } = useRouterState();
  const navigate = useNavigate();
  const path = location.pathname;
  const parentRoute = `/${path.slice(1).split("/")[0]}` || "/";

  return (
    <nav className="absolute z-50 h-16 w-full text-white lg:top-8 lg:h-24 ">
      <div className="flex h-full items-center justify-between px-8 sm:px-0 sm:pl-8">
        <img
          src="/src/assets/shared/logo.svg"
          className="w-[40px] hover:cursor-pointer"
          onClick={() => navigate({ to: "/" })}
        />
        <MobileNav />

        <div className="z-50 ml-16 hidden h-[2px] w-full translate-x-6 bg-white/20 lg:flex"></div>
        <ul className="hidden h-full list-none	items-center gap-16 bg-white/10 sm:flex sm:pl-16 sm:pr-8 lg:pl-24 lg:pr-40 lg:backdrop-blur-lg">
          {links.map((link, i) => {
            const isActive = parentRoute === link.href;
            return (
              <li
                key={link.label}
                className={classNames(
                  "my-auto h-full",
                  "hover:border-b-[3px] hover:border-white/50",
                  {
                    "border-collapse border-b-[3px] border-white": isActive,
                  },
                )}
              >
                <Link
                  to={link.href}
                  className="flex h-full items-center gap-2 font-barlow_condensed text-[16px] uppercase tracking-[2.7px]"
                >
                  <span className="hidden font-bold lg:block">
                    {i.toString().padStart(2, "0")}
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
