import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { Search } from "lucide-react";
import navLinks from "@/constants/nav-links";
import MobileNavigation from "./mobile-navigation";

function Header() {
  return (
    <header className="py-4">
      <Container className="flex flex-wrap items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <img
            className="size-6"
            src="./assets/header/vscode.svg"
            alt="vs code"
          />
          <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Visual Studio Code
          </span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  href={navLink.href}
                >
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden gap-2 xl:flex">
          <ModeToggle />
          <label className="flex items-center gap-2 px-2 outline-1 outline-gray-300 outline-solid has-focus:outline-sky-700 dark:outline-gray-700">
            <Search size="18" />
            <input
              type="search"
              placeholder="Search docs"
              className="focus:outline-0"
            />
          </label>
          <Button className="cursor-pointer bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700">
            Download
          </Button>
        </div>
        <MobileNavigation />
      </Container>
    </header>
  );
}

export default Header;
