import { createFileRoute, Link } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";
import { cn, convertStringToKebabCase, getCrewMember } from "../../utils/utils";
import { Circle } from "lucide-react";
import MaxWidthContainer from "../../components/MaxWidthContainer";

export const Route = createFileRoute("/crew/$crewMember")({
  loader: ({ params: { crewMember } }) => {
    return getCrewMember(crewMember);
  },
  component: DestinationMoon,
});

function DestinationMoon() {
  const crewMember = Route.useLoaderData();
  return (
    <main className="h-screen bg-destination-desktop bg-cover bg-center text-white">
      <MaxWidthContainer
        className={cn("py-16 ", "sm:justify-end sm:gap-8 sm:py-0")}
      >
        <h5
          className={cn(
            "text-subheading-2 uppercase text-white",
            "sm:order-1 sm:self-start",
          )}
        >
          <span className="font-bold text-slate-600">02 </span>Meet your crew
        </h5>
        <div
          className={cn(
            "flex h-[30%] w-full  flex-col justify-center gap-16 self-center border-b-2 border-white/10",
            "sm:order-last sm:h-[50%] sm:border-b-0",
          )}
        >
          <img
            src={crewMember?.imageUrl}
            className="mx-auto h-full w-auto"
            alt={`A picture of the ${crewMember?.name.toLowerCase()}.`}
          ></img>
        </div>
        <ul className={cn("flex list-none gap-4 uppercase", "sm:order-3")}>
          {crewMembers.map((crew) => (
            <li key={crew.name}>
              <Link
                to="/crew/$crewMember"
                params={{
                  crewMember: convertStringToKebabCase(crew.name),
                }}
                activeProps={{
                  className: "border-b-4 border-white text-white",
                }}
              >
                <Circle className="h-4 w-4 fill-white/20 text-white/20 hover:fill-white/50 hover:text-white/50" />
              </Link>
            </li>
          ))}
        </ul>
        <header
          className={cn("flex  flex-col gap-2 text-center ", "sm:order-2")}
        >
          <h4 className="text-[16px] uppercase text-white/50">
            {crewMember?.jobTitle}
          </h4>
          <h1 className={cn("text-[24px] uppercase text-white")}>
            {crewMember?.name}
          </h1>
          <p className={cn("px-4 text-primary")}>{crewMember?.bio}</p>
        </header>
      </MaxWidthContainer>
    </main>
  );
}
