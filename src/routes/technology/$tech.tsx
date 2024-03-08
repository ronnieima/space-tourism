import MaxWidthContainer from "@/components/MaxWidthContainer";
import PageHeader from "@/components/PageHeader";
import { technologies } from "@/config/content";
import { cn, convertStringToKebabCase, getTechnology } from "@/utils/utils";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology/$tech")({
  loader: ({ params: { tech } }) => getTechnology(tech),
  component: TechnologyPage,
});

function TechnologyPage() {
  const technology = Route.useLoaderData();
  return (
    <main
      className={cn(
        "h-screen   bg-technology-mobile bg-cover bg-center bg-no-repeat text-white",
        "sm:bg-technology-tablet",
        "lg:bg-technology-desktop",
      )}
    >
      <MaxWidthContainer
        className={cn(
          "justify-center px-0",
          "md:px-0 ",
          "  lg:max-w-none lg:items-center lg:justify-center lg:gap-8 lg:px-0 lg:pl-16",
        )}
      >
        <PageHeader number="03" title="Space Launch 101" />

        <div
          className={cn(
            "flex flex-col gap-8 py-8",
            "md:gap-12 md:px-0",
            "lg:w-full lg:flex-row lg:items-center lg:justify-end ",
          )}
        >
          <div className="w-full lg:order-last lg:h-auto lg:w-1/3">
            <img
              src={technology.imageUrl.landscape}
              className="h-full w-full lg:hidden"
            />
            <img
              src={technology.imageUrl.portrait}
              className="hidden h-full w-full lg:block"
            />
          </div>
          <ul
            className={cn(
              "flex items-center justify-center gap-4 text-white",
              "lg:flex-col",
            )}
          >
            {technologies.map((tech, i) => (
              <li key={tech.name}>
                <Link
                  to="/technology/$tech"
                  params={{ tech: convertStringToKebabCase(tech.name) }}
                  className={cn(
                    "text-subheading-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 font-bellefair",
                    "hover:border-white",
                    "lg:h-20 lg:w-20",
                  )}
                  activeProps={{ className: "bg-white text-black" }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              "flex flex-col items-center gap-2 px-8 text-center uppercase",
              "px-0 lg:items-start lg:text-left",
            )}
          >
            <h5 className="text-subheading-2">The terminology...</h5>
            <h3 className="">{technology.name}</h3>
            <p className={cn("normal-case", "max-w-lg", "sm:max-w-md")}>
              {technology.description}
            </p>
          </div>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
