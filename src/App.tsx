import { ThemeProvider } from "@/context/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";
import CopilotCustomization from "./components/copilot-customization";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Hero />
        <CopilotCustomization />
      </main>
    </ThemeProvider>
  );
}

export default App;
