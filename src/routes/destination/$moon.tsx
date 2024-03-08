import { createFileRoute } from "@tanstack/react-router";
import classNames from "classnames";
import { moons } from "../../config/content";
import { cn, getMoon } from "../../utils/utils";
import { Link } from "@tanstack/react-router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import PageHeader from "@/components/PageHeader";

export const Route = createFileRoute("/destination/$moon")({
  loader: ({ params: { moon } }) => {
    return getMoon(moon);
  },
  component: DestinationPage,
});

function DestinationPage() {
  const selectedMoon = Route.useLoaderData();
  return (
    <main
      className={classNames(
        "bg-destination-mobile bg-cover bg-center bg-no-repeat text-white ",
        "sm:bg-destination-tablet",
        "lg:bg-destination-desktop",
      )}
    >
      <MaxWidthContainer className="gap-16  lg:justify-start ">
        <PageHeader number="01" title="Pick your destination" />
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:py-16">
          <div className="h-64 w-64  lg:h-auto lg:w-[32rem]">
            <img
              src={selectedMoon?.imageUrl}
              className="h-full w-full "
              alt={`A picture of the ${selectedMoon.name.toLowerCase()}.`}
            ></img>
          </div>

          <div className="flex flex-col items-center gap-8 lg:w-1/2 lg:items-start lg:justify-start">
            <ul className={classNames("flex gap-8")}>
              {moons.map((moon) => {
                return (
                  <li
                    key={moon.name}
                    className="flex h-10 flex-col justify-between"
                  >
                    <Link
                      to={"/destination/$moon"}
                      params={{ moon: moon.name.toLowerCase() }}
                      key={moon.name}
                      className={classNames(
                        "text-nav peer font-barlow_condensed text-primary ",
                        "underline-offset-4  ",
                      )}
                    >
                      {moon.name.toUpperCase()}
                    </Link>
                    <div
                      className={cn(
                        "h-1 w-full bg-transparent peer-hover:bg-white/50",
                        {
                          "bg-white": moon.name === selectedMoon.name,
                        },
                      )}
                    ></div>
                  </li>
                );
              })}
            </ul>
            <div className="space-y-8 px-8 text-center sm:px-24 lg:max-w-lg lg:items-start lg:px-0 lg:text-left">
              <h2 className="text-[56px] uppercase sm:text-[80px] lg:text-[100px]">
                {selectedMoon.name}
              </h2>
              <p className="leading-10 text-primary lg:pr-8">
                {selectedMoon.description}
              </p>
              <div className="h-[1px] w-full bg-white/20"></div>
            </div>
            <div className="flex flex-col items-center gap-16  py-8 text-center uppercase sm:flex-row sm:gap-32 lg:text-left">
              <div>
                <p className="text-subheading-2 text-primary">AVG. DISTANCE</p>
                <h4>{selectedMoon.averageDistance}</h4>
              </div>
              <div>
                <p className="text-subheading-2 text-primary">
                  EST. TRAVEL TIME
                </p>
                <h4>{selectedMoon.estimatedTravelTime}</h4>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
