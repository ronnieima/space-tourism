import { createFileRoute } from "@tanstack/react-router";
import classNames from "classnames";
import { moons } from "../../config/content";
import { getMoon } from "../../utils/utils";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/destination/$moon")({
  loader: ({ location: { href } }) => {
    console.log(href);
  },
  component: DestinationMoon,
});

function DestinationMoon() {
  const { moon } = Route.useParams();

  const currentMoon = getMoon(moon);
  return (
    <main className=" bright h-screen bg-destination-desktop bg-cover bg-center  text-white">
      <section className="mx-auto  flex h-full w-full max-w-[80rem] items-center justify-between gap-32 px-16 pt-12">
        <div className=" flex  w-1/2 flex-col gap-16">
          <h5 className="uppercase ">
            <span className="font-bold text-slate-600">01 </span>Pick your
            destination
          </h5>
          <div className="mt-16 self-center">
            <img
              src={currentMoon?.imageUrl}
              className=""
              alt={`A picture of the ${currentMoon.name.toLowerCase()}.`}
            ></img>
          </div>
        </div>

        <div className="flex w-1/2 flex-col gap-8">
          <ul className={classNames("flex gap-8")}>
            {moons.map((moon) => {
              return (
                <li>
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
          <div className="space-y-2">
            <h2 className="uppercase">{currentMoon.name}</h2>
            <p className="pr-8 leading-10 text-primary">
              {currentMoon.description}
            </p>
          </div>
          <div className="h-[1px] w-full bg-white/30"></div>
          <div className="flex gap-16 uppercase">
            <div>
              <p>AVG. DISTANCE</p>
              <h4>{currentMoon.averageDistance}</h4>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <h4>{currentMoon.estimatedTravelTime}</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
