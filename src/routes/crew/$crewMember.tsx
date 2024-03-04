import { createFileRoute } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";

export const Route = createFileRoute("/crew/$crewMember")({
  loader: ({ location: { href } }) => {
    console.log(href);
  },
  component: DestinationMoon,
});

function DestinationMoon() {
  const { crewMember } = Route.useParams();

  const currentCrewMember = crewMembers.find(
    (member) => (member.name = crewMember),
  );
  return (
    <main className=" bright h-screen bg-destination-desktop bg-cover bg-center  text-white">
      <section className="mx-auto  flex h-full w-full max-w-[80rem] items-center justify-between gap-32 px-16 pt-12">
        <div className="flex w-1/2 flex-col gap-8">
          <h5 className="uppercase ">
            <span className="font-bold text-slate-600">02 </span>Meet your crew
          </h5>

          <div className="space-y-2">
            <h2 className="uppercase">Test</h2>
            <p className="pr-8 leading-10 text-primary">{}</p>
          </div>
          <div className="h-[1px] w-full bg-white/30"></div>
          <div className="flex gap-16 uppercase">
            <div>
              <p>AVG. DISTANCE</p>
              <h4>{}</h4>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <h4>{}</h4>
            </div>
          </div>
        </div>
        <div className=" flex  w-1/2 flex-col gap-16">
          <div className="mt-16 self-center">
            <img
              src={currentCrewMember?.imageUrl}
              className=""
              alt={`A picture of the ${currentCrewMember?.name.toLowerCase()}.`}
            ></img>
          </div>
        </div>
      </section>
    </main>
  );
}
