import { createFileRoute } from "@tanstack/react-router";
import classNames from "classnames";
import { moons } from "../../config/content";
import { getMoon } from "../../utils/utils";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/destination/$moon")({
  component: DestinationMoon,
});

function DestinationMoon() {
  const { moon } = Route.useParams();

  const currentMoon = getMoon(moon);
  return (
    <main className="h-screen  bg-destination-desktop bg-cover bg-center text-white">
      <section className="flex h-full w-full items-center justify-between gap-32 px-32 pt-12">
        <div className="gpa-4 flex w-1/2  flex-col gap-16">
          <h5 className="uppercase text-white">
            <span className="font-bold text-slate-600">01 </span>Pick your
            destination
          </h5>
          <div>
            <img
              src={currentMoon?.imageUrl}
              alt={`A picture of the ${currentMoon.name.toLowerCase()}.`}
              className=""
            ></img>
          </div>
        </div>
        <div className="w-1/2">
          <ul className={classNames("flex gap-4")}>
            {moons.map((moon) => {
              return (
                <li>
                  <Link
                    to={"/destination/$moon"}
                    params={{ moon: moon.name.toLowerCase() }}
                    key={moon.name}
                    className="text-nav"
                  >
                    {moon.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
          <h1 className="uppercase">{currentMoon.name}</h1>
          <p className="">{currentMoon.description}</p>
          <div className="h-[1px] w-full bg-white/30"></div>
          <div className="flex gap-16">
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
