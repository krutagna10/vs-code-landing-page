import { ThemeProvider } from "@/context/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";
import CopilotCustomization from "./components/copilot-customization";
import AiFeatures from "./components/ai-features";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Hero />
        <CopilotCustomization />
        <AiFeatures />
      </main>
    </ThemeProvider>
  );
}

export default App;
