import MaxWidthContainer from "@/components/MaxWidthContainer";
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
        "bg-technology-mobile h-screen bg-cover bg-center bg-no-repeat text-white",
        "sm:bg-technology-tablet",
        "lg:bg-technology-desktop",
      )}
    >
      <MaxWidthContainer className="gap-8 px-0">
        <h5 className="text-subheading-2 uppercase ">
          <span className="font-bold text-slate-600">03 </span>Space Launch 101
        </h5>

        <div>
          <img src={technology.imageUrl.landscape} />
        </div>
        <ul className="flex items-center justify-center gap-8 text-white">
          {technologies.map((tech, i) => (
            <li key={tech.name}>
              <Link
                to="/technology/$tech"
                params={{ tech: convertStringToKebabCase(tech.name) }}
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full border border-white/20",
                  "hover:border-white",
                )}
                activeProps={{ className: "bg-white text-black" }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-8 px-8 text-center uppercase">
          <header>
            <h5>The terminology...</h5>
            <h3>{technology.name}</h3>
          </header>
          <p>{technology.description}</p>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
