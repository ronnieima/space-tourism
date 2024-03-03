import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="-z-50 h-screen bg-home-desktop bg-cover bg-center bg-no-repeat py-8 text-white">
      <section className="font-bellefair flex h-full items-end justify-between px-32 pb-32">
        <header className="w-[64rem]">
          <h5 className="font-barlow_condensed text-[28px] tracking-[4.75px] text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO <br />
          </h5>
          <h1 className="text-[150px] ">SPACE</h1>
          <p className="font-barlow_condensed pr-[32rem] text-[18px] leading-8 text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </header>
        <div className="  relative rounded-full">
          <button className="peer relative z-20 h-64 w-64 rounded-full bg-white text-[32px] uppercase text-black">
            Explore
          </button>
          <div className="absolute left-1/2 top-1/2 z-10 mx-auto h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 opacity-0 transition-all duration-200 peer-hover:opacity-100"></div>
        </div>
      </section>
    </main>
  );
}
