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
        "h-full bg-destination-mobile bg-cover bg-center bg-no-repeat py-2 text-white",
        "md:bg-destination-tablet",
        "lg:h-screen lg:bg-destination-desktop",
      )}
    >
      <MaxWidthContainer>
        <div className=" flex flex-col items-center lg:w-1/2 lg:gap-16">
          <h5 className=" text-center uppercase sm:text-left ">
            <span className={classNames("font-bold text-slate-600")}>01 </span>
            Pick your destination
          </h5>
          <div className="mt-16 h-64 w-64 self-center lg:h-80 lg:w-80">
            <img
              src={moon?.imageUrl}
              className=""
              alt={`A picture of the ${moon.name.toLowerCase()}.`}
            ></img>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:w-1/2 lg:items-start">
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
                      "text-nav text-primary",
                      "hover:border-b-4 hover:border-white/50",
                    )}
                  >
                    {moon.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="uppercase">{moon.name}</h2>
            <p className="leading-10 text-primary lg:pr-8">
              {moon.description}
            </p>
          </div>
          <div className="h-[1px] w-full bg-white/20"></div>
          <div className="flex flex-col items-center gap-16 py-8 text-center uppercase lg:flex-row">
            <div>
              <p>AVG. DISTANCE</p>
              <h4>{moon.averageDistance}</h4>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <h4>{moon.estimatedTravelTime}</h4>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
