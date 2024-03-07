import { createFileRoute } from "@tanstack/react-router";
import classNames from "classnames";
import { moons } from "../../config/content";
import { getMoon } from "../../utils/utils";
import { Link } from "@tanstack/react-router";
import MaxWidthContainer from "../../components/MaxWidthContainer";

export const Route = createFileRoute("/destination/$moon")({
  loader: ({ params: { moon } }) => {
    return getMoon(moon);
  },
  component: DestinationMoon,
});

function DestinationMoon() {
  const moon = Route.useLoaderData();
  return (
    <main
      className={classNames(
        "h-full bg-destination-mobile bg-cover bg-center bg-no-repeat text-white ",
        "md:bg-destination-tablet",
        " lg:h-screen lg:bg-destination-desktop",
      )}
    >
      <MaxWidthContainer className="flex-col justify-center gap-16 lg:px-0">
        <h5 className="text-center text-[16px] uppercase text-white md:self-start md:px-8 md:text-left">
          <span className={classNames("font-bold text-slate-600")}>01 </span>
          Pick your destination
        </h5>
        <div className="flex h-full flex-col gap-16 lg:flex-row">
          <div className=" flex w-full flex-col items-center lg:w-1/2 lg:gap-16">
            <div className="h-64 w-64   lg:h-auto lg:w-[445px]">
              <img
                src={moon?.imageUrl}
                className="h-full w-full"
                alt={`A picture of the ${moon.name.toLowerCase()}.`}
              ></img>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 lg:w-1/2 lg:items-start lg:pr-32">
            <ul className={classNames("flex gap-8")}>
              {moons.map((moon) => {
                return (
                  <li key={moon.name}>
                    <Link
                      to={"/destination/$moon"}
                      params={{ moon: moon.name.toLowerCase() }}
                      key={moon.name}
                      activeProps={{
                        className: "border-b-4 border-white text-white",
                      }}
                      className={classNames(
                        "text-nav font-barlow_condensed text-primary",
                        "hover:border-b-4 hover:border-white/50",
                      )}
                    >
                      {moon.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="space-y-8 px-8 text-center md:px-24 lg:items-start lg:px-0 lg:text-left">
              <h2 className="text-[56px] uppercase md:text-[80px] lg:text-[100px]">
                {moon.name}
              </h2>
              <p className="leading-10 text-primary lg:pr-8">
                {moon.description}
              </p>
              <div className="h-[1px] w-full bg-white/20"></div>
            </div>
            <div className="flex flex-col items-center gap-16  py-8 text-center uppercase md:flex-row md:gap-32 lg:text-left">
              <div>
                <p className="text-subheading-2 text-primary">AVG. DISTANCE</p>
                <h4>{moon.averageDistance}</h4>
              </div>
              <div>
                <p className="text-subheading-2 text-primary">
                  EST. TRAVEL TIME
                </p>
                <h4>{moon.estimatedTravelTime}</h4>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
