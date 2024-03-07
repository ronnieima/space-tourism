import { createFileRoute, Link } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";
import { cn, convertStringToKebabCase, getCrewMember } from "../../utils/utils";
import { Circle } from "lucide-react";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import PageHeader from "@/components/PageHeader";

export const Route = createFileRoute("/crew/$crewMember")({
  loader: ({ params: { crewMember } }) => {
    return getCrewMember(crewMember);
  },
  component: CrewPage,
});

function CrewPage() {
  const crewMember = Route.useLoaderData();
  return (
    <main
      className={cn(
        "h-screen bg-crew-mobile bg-cover bg-center text-white",
        "sm:bg-crew-tablet",
        " lg:bg-crew-desktop",
      )}
    >
      <MaxWidthContainer
        className={cn(
          "h-full gap-8 py-16",
          "sm:justify-end sm:pb-0   lg:justify-end",
        )}
      >
        <PageHeader number="02" title="Meet your crew" />

        <div
          className={cn(
            "flex w-full flex-col",
            "sm:justify-end",
            " lg:h-full lg:w-full lg:flex-row lg:justify-start lg:gap-8",
          )}
        >
          {/* IMAGE */}
          <div
            className={cn(
              "flex h-[20rem] w-auto flex-col items-end gap-16 self-center border-b-2 border-white/10",
              "sm:order-last sm:h-[32rem]  sm:justify-end sm:border-b-0",
              "lg:h-auto lg:w-1/3 lg:self-end",
            )}
          >
            <img
              src={crewMember?.imageUrl}
              className=" h-full w-full "
              alt={`A picture of ${crewMember?.name.toLowerCase()}.`}
            />
          </div>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-2",
              " lg:w-1/2 lg:items-start lg:justify-end lg:gap-32 lg:pb-16 ",
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
                      className: "",
                    }}
                  >
                    <Circle
                      className={cn(
                        "h-4 w-4 fill-white/20 text-white/20",
                        "avtive:ring-primary active:ring",
                        "hover:fill-white/50 hover:text-white/50",
                        {
                          "rounded-full bg-white text-white":
                            crew.name === crewMember.name,
                        },
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <header
              className={cn(
                "flex  flex-col gap-2 text-center ",
                "sm:order-2",
                "lg:justify-items-center  lg:text-left",
              )}
            >
              <h4 className="uppercase text-white/50">
                {crewMember?.jobTitle}
              </h4>
              <h3 className={cn("uppercase text-white")}>{crewMember?.name}</h3>
              <p
                className={cn(
                  "mx-auto max-w-lg px-4 text-primary sm:max-w-md lg:m-0 lg:max-w-sm lg:px-0",
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
