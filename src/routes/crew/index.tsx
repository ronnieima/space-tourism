import { createFileRoute, Navigate } from "@tanstack/react-router";
import { crewMembers } from "../../config/content";

export const Route = createFileRoute("/crew/")({
  component: () => (
    <Navigate
      to="/crew/$crewMember"
      params={{
        crewMember: crewMembers[0].name.split(" ").join("-").toLowerCase(),
      }}
    />
  ),
});
