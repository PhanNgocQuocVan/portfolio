import ExpandableCardDemo from "../expandable-card-demo-grid";
import ScrollFloat from "../ScrollFloat";
import IconReactGlow from "./IconReactGlow";

function Projects() {
  return (
    <div
      id="Projects"
      className="w-full flex flex-col items-center lg:mt-40 mt-0 relative"
    >
      <ScrollFloat
        containerClassName="mt-24 lg:mb-40 mb-30"
        textClassName="text-white font-bold"
      >
        Projects
      </ScrollFloat>

      <ExpandableCardDemo />

      {/* logo react */}
      <div className="absolute bottom-50 right-8">
        <IconReactGlow />
      </div>
    </div>
  );
}

export default Projects;
