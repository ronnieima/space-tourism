import { technologies } from "@/config/content";
import { convertStringToKebabCase } from "@/utils/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology/")({
  loader: ({ navigate }) =>
    navigate({
      to: "$technology",
      params: { technology: convertStringToKebabCase(technologies[0].name) },
    }),
});
