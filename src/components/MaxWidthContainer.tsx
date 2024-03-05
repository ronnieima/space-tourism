import classNames from "classnames";
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
      className={classNames(
        "mx-auto flex h-full w-full max-w-[80rem] flex-col items-center justify-between gap-8 px-4 pt-24 lg:flex-row lg:gap-32 lg:px-16 lg:pt-32",
        className,
      )}
    >
      {children}
    </section>
  );
}
