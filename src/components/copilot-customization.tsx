import Container from "./ui/container";
import customizations from "@/constants/copilot-customization";

function CopilotCustomization() {
  return (
    <section className="py-12">
      <Container className="grid md:grid-cols-3 gap-4">
        {customizations.map((customization, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-md space-y-2">
            <div className="space-y-2">
              <h2 className="text-xl">{customization.title}</h2>
              <p className="text-gray-300">{customization.description}</p>
            </div>
            <img src={customization.imageDark} />
          </div>
        ))}
      </Container>
    </section>
  );
}

export default CopilotCustomization;
