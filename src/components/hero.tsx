import Container from "./ui/container";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/context/theme-provider";
import heroLight from "../../public/assets/hero-light-lg.webm";
import heroDark from "../../public/assets/hero-dark-lg.webm";

function Hero() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <section className="py-12">
      <Container className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-center text-6xl font-bold">
            <span className="block">Your code editor.</span>
            <span className="block">Redefined with AI.</span>
          </h1>
          <div className="flex justify-center gap-2">
            <Button>
              <ArrowDownToLine />
              <span>.deb</span>
            </Button>
            <Button>
              <ArrowDownToLine />
              <span>
                <div>.rpm</div>
              </span>
            </Button>
            <Button variant="secondary">Get Copilot Free</Button>
          </div>
          <p className="space-x-1 text-center text-sm">
            <a className="text-sky-500 underline" href="#">
              Web
            </a>
            <span>,</span>
            <a className="text-sky-500 underline" href="#">
              Insiders edition
            </a>
            <span>, or</span>
            <a className="text-sky-500 underline" href="#">
              other platforms
            </a>
          </p>
        </div>
        <div className="rounded-md bg-[url(./assets/hero-light.webp)] p-4">
          <video autoPlay muted>
            <source
              src={
                theme === "light"
                  ? "./assets/hero-light-lg.webm"
                  : "./assets/hero-dark-lg.webm"
              }
              type="video/webm"
            />
          </video>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
