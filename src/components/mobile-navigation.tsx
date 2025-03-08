import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import navLinks from "@/constants/nav-links";

function MobileNavigation() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <nav>
            <ul className="flex min-h-screen flex-col justify-center gap-6 pl-6">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <a href={navLink.href}>{navLink.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
