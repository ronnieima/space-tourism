import { useRouterState, Link } from "@tanstack/react-router";
import classNames from "classnames";

const links = [
  { label: "home", href: "/" },
  { label: "destination", href: "/destination" },
  { label: "crew", href: "/crew" },
  { label: "technology", href: "/technology" },
];

export default function Navbar() {
  const { location } = useRouterState();
  const path = location.pathname;
  const parentRoute = `/${path.slice(1).split("/")[0]}` || "/";

  return (
    <nav className="absolute top-8 h-24 w-full text-white">
      <div className="flex h-full items-center justify-between">
        <div className="relative  h-16   bg-transparent px-8">
          <img
            src="/src/assets/shared/logo.svg"
            className="absolute h-full w-full"
          />
        </div>
        <div className="z-50 ml-16 h-[2px] w-full translate-x-6 bg-white/20"></div>

        <ul className="flex h-full list-none items-center	gap-16 pl-24 pr-96  backdrop-blur-lg">
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
                  <span className="font-bold">
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
