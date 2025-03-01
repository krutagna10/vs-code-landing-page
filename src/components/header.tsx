import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="py-4">
      <Container className="flex items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <img className="size-8" src="./assets/vscode.svg" alt="vs code" />
          <span>Visual Studio Code</span>
        </a>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Extensions</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Github Copilot</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <ModeToggle />
          <Input type="search" placeholder="Search docs" />
          <Button>Download</Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
