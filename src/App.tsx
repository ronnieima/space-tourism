const links = [
  { label: "home", href: "/" },
  { label: "destination", href: "/" },
  { label: "crew", href: "/" },
  { label: "technology", href: "/" },
];

function App() {
  return (
    <main className="h-screen bg-home-desktop bg-cover bg-center bg-no-repeat">
      <nav className="absolute top-8 h-24 w-full">
        <div className="flex h-full items-center">
          <div className="bg-transparent">
            <img src="/src/assets/shared/logo.svg" />
          </div>
          <div></div>
          <li className="flex list-none text-white bg-blend-saturation ">
            {links.map((link, i) => (
              <a href={link.href}>
                {i.toString().padStart(2, "0")}
                {link.label}
              </a>
            ))}
          </li>
        </div>
      </nav>
    </main>
  );
}

export default App;
