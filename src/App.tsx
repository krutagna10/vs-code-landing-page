import { ThemeProvider } from "@/context/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
