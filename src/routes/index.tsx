import { createFileRoute, useNavigate } from "@tanstack/react-router";
import classNames from "classnames";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return (
    <main
      className={classNames(
        "-z-50 h-screen bg-home-mobile bg-cover bg-center bg-no-repeat ",
        "md:bg-home-tablet",
        "lg:bg-home-desktop",
      )}
    >
      <section
        className={classNames(
          "mx-auto flex h-full  flex-col items-center justify-center gap-12 py-16  font-bellefair",
          "lg:flex-row lg:items-end lg:justify-between lg:px-32 lg:pb-32 ",
        )}
      >
        <header className="flex w-full flex-col items-center justify-center px-4 text-center lg:w-[32rem] lg:items-start lg:text-left">
          <h5 className="text-sm uppercase ">So, you want to travel to</h5>
          <h1 className="text-[80px] md:text-[150px]">SPACE</h1>
          <p className="w-full px-4 leading-8 text-[#D0D6F9] sm:px-24 md:px-32 lg:p-0">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </header>
        <div className="relative">
          <button
            onClick={() => navigate({ to: "/destination" })}
            className={classNames(
              "peer relative z-20 h-40 w-40 rounded-full bg-white text-[32px] text-lg uppercase text-black",
              "sm:h-64 sm:w-64 sm:text-4xl",
            )}
          >
            Explore
          </button>
          <div
            className={classNames(
              "absolute left-1/2 top-1/2 z-10 mx-auto h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 opacity-0 transition-all duration-200 peer-hover:opacity-100",
              "xl:h-96 xl:w-96",
            )}
          />
        </div>
      </section>
    </main>
  );
}
