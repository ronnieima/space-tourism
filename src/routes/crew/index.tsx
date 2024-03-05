import { createFileRoute } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";
import { convertStringToKebabCase } from "../../utils/utils";

export const Route = createFileRoute("/crew/")({
  loader: ({ navigate }) => {
    navigate({
      to: "/crew/$crewMember",
      params: {
        crewMember: convertStringToKebabCase(crewMembers[0].name),
      },
      replace: true,
    });
  },
});
