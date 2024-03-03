const links = [
  { label: "home", href: "/" },
  { label: "destination", href: "/" },
  { label: "crew", href: "/" },
  { label: "technology", href: "/" },
];

function App() {
  return (
    <main className="h-screen bg-home-desktop bg-cover bg-center bg-no-repeat">
      <nav className="absolute top-8 h-24 w-full ">
        <div className="flex h-full items-center justify-between">
          <div className="relative  h-16   bg-transparent px-8">
            <img
              src="/src/assets/shared/logo.svg"
              className="absolute h-full w-full"
            />
          </div>
          <div className="z-50 ml-16 h-[2px] w-full translate-x-6 bg-white/20"></div>

          <ul className="  flex h-full list-none items-center	gap-16 pl-24 pr-96 text-white backdrop-blur-lg">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-barlow_condensed space-x-2 text-[16px] uppercase tracking-[2.7px]"
                >
                  <span className="font-bold">
                    {i.toString().padStart(2, "0")}
                  </span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default App;
