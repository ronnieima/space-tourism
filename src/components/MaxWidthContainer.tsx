import { cn } from "@/utils/utils";
import { PropsWithChildren } from "react";

interface MaxWidthContainerProps extends PropsWithChildren {
  className?: string;
}

export default function MaxWidthContainer({
  children,
  className,
}: MaxWidthContainerProps) {
  return (
    <section
      className={cn(
        "mx-auto flex h-full w-full max-w-[80rem] flex-col  items-center justify-center px-4  pt-24 sm:px-16 lg:px-16 lg:pt-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
