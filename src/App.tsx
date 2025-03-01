import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <h1>VS Code Landing Page</h1>
        <ModeToggle />
      </main>
    </ThemeProvider>
  );
}

export default App;
