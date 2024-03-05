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
        "mx-auto flex h-screen w-full max-w-[80rem] flex-col items-center justify-center gap-8 px-4 pt-24 lg:flex-row lg:gap-32 lg:px-16 lg:pt-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
