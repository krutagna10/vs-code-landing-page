import Container from "./ui/container";
import customizations from "@/constants/copilot-customization";
import { useTheme } from "@/context/theme-provider";

function CopilotCustomization() {
  const { theme } = useTheme();

  return (
    <section className="py-12">
      <Container className="grid gap-4 md:grid-cols-3">
        {customizations.map((customization, index) => (
          <div
            key={index}
            className="space-y-2 rounded-md border-1 border-gray-200 bg-white/5 p-4"
          >
            <div className="space-y-2">
              <h2 className="text-xl">{customization.title}</h2>
              <p className="text-gray-500 dark:text-gray-300">
                {customization.description}
              </p>
            </div>
            <img
              key={theme}
              src={
                theme === "light"
                  ? customization.image.light
                  : customization.image.dark
              }
            />
          </div>
        ))}
      </Container>
    </section>
  );
}

export default CopilotCustomization;
