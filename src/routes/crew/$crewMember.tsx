import { createFileRoute, Link } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";
import { convertStringToKebabCase, getCrewMember } from "../../utils/utils";
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
    <main className="bg-destination-desktop bg-cover bg-center text-white  lg:h-screen">
      <MaxWidthContainer>
        <div className="flex w-1/2 flex-col gap-8">
          <h5 className="uppercase ">
            <span className="font-bold text-slate-600">02 </span>Meet your crew
          </h5>

          <div className="">
            <h3 className="uppercase">{crewMember?.jobTitle}</h3>
            <h1 className="pr-8  leading-10 text-primary">
              {crewMember?.name}
            </h1>
            <p>{crewMember?.bio}</p>
          </div>
          <ul className="flex list-none gap-16 uppercase">
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
                  <Circle className="fill-white/20 text-white/20 hover:fill-white/50 hover:text-white/50" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex  w-1/2 flex-col gap-16">
          <div className="mt-16 self-center">
            <img
              src={crewMember?.imageUrl}
              className=""
              alt={`A picture of the ${crewMember?.name.toLowerCase()}.`}
            ></img>
          </div>
        </div>
      </MaxWidthContainer>
    </main>
  );
}
