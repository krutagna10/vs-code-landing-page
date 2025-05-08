import { useTheme } from "@/context/theme-provider";
import Container from "./ui/container";
import { Button } from "./ui/button";

function AiFeatures() {
  const { theme } = useTheme();

  return (
    <section className="py-12">
      <Container className="grid items-center gap-4 rounded-md bg-zinc-900 bg-[url(./assets/ai-features/banner-dark.webp)] bg-cover p-6 md:grid-cols-2">
        <h2 className="text-3xl font-bold">
          Use AI features in VS Code for free
        </h2>
        <div className="space-y-2">
          <p>No trial. No credit card required. Just your GitHub account.</p>
          <Button variant="secondary">Try Free</Button>
        </div>
      </Container>
    </section>
  );
}

export default AiFeatures;
