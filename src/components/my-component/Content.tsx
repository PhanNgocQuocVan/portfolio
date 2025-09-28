import Aurora from "../Aurora";
import CurvedLoop from "../CurvedLoop";
import About from "./About";
import Experience from "./Experience";

import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";
import Projects from "./Projects";
import TechStack from "./TechStack";

function Content() {
  return (
    <div>
      {/* hinhNen */}
      <Aurora
        colorStops={["#2563EB", "#60A5FA", "#1E40AF"]}
        blend={1}
        amplitude={1.0}
        speed={0.5}
      />
      {/* hero section */}
      <div className="-mt-[70vh] flex items-center px-15 ">
        <HeroSectionLeft />
        <HeroSectionRight />
      </div>
      <CurvedLoop
        marqueeText="Forntend ✦ React ✦ Forntend ✦ React ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={false}
        className="text-6xl"
      />
      <About />
      <TechStack />
      <Projects />
      <Experience />
    </div>
  );
}

export default Content;
