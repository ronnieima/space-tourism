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
    <main
      className={cn(
        "bg-crew-mobile h-screen bg-cover bg-center text-white",
        "sm:bg-crew-tablet",
        "lg:bg-crew-desktop",
      )}
    >
      <MaxWidthContainer
        className={cn("gap-8 py-16", "sm:justify-end sm:pb-0 sm:pt-16")}
      >
        <h5
          className={cn(
            "text-subheading-2 order-first uppercase text-white",
            "sm:self-start sm:py-12",
          )}
        >
          <span className="font-bold text-slate-600">02 </span>Meet your crew
        </h5>
        <div
          className={cn(
            "flex flex-col",
            "sm:justify-end",
            "lg:flex-row lg:gap-8",
          )}
        >
          {/* IMAGE */}
          <div
            className={cn(
              " flex h-full w-full flex-col items-end gap-16 self-center border-b-2 border-white/10",
              "sm:order-last sm:h-[40rem] sm:border-b-0",
              "lg:h-[32rem] lg:w-[40rem]",
            )}
          >
            <img
              src={crewMember?.imageUrl}
              className="mx-auto h-[16rem] w-auto lg:h-full lg:w-full"
              alt={`A picture of the ${crewMember?.name.toLowerCase()}.`}
            ></img>
          </div>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-2 py-8",
              " lg:w-3/4 lg:items-start lg:justify-end lg:py-16",
            )}
          >
            <ul
              className={cn(
                "flex list-none gap-4 py-2 uppercase",
                "sm:order-3",
              )}
            >
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
              className={cn(
                "flex  flex-col gap-2 text-center ",
                "sm:order-2",
                "lg:justify-items-center lg:pb-32 lg:text-left",
              )}
            >
              <h4 className="uppercase text-white/50">
                {crewMember?.jobTitle}
              </h4>
              <h3 className={cn("uppercase text-white")}>{crewMember?.name}</h3>
              <p
                className={cn(
                  "mx-auto max-w-lg px-4 text-primary lg:m-0 lg:max-w-sm lg:px-0",
                )}
              >
                {crewMember?.bio}
              </p>
            </header>
          </div>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
