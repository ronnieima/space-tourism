import { createFileRoute } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";

export const Route = createFileRoute("/crew/")({
  loader: ({ navigate }) => {
    navigate({
      to: "/crew/$crewMember",
      params: {
        crewMember: crewMembers[0].name.split(" ").join("-").toLowerCase(),
      },
      replace: true,
    });
  },
});
