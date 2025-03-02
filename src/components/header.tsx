import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="py-4">
      <Container className="flex items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <img className="size-6" src="./assets/vscode.svg" alt="vs code" />
          <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Visual Studio Code
          </span>
        </a>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                Updates
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                API
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                Extensions
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                href="#"
              >
                Github Copilot
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
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
      </Container>
    </header>
  );
}

export default Header;
