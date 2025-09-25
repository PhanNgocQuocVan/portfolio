import Aurora from "../Aurora";

import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";

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
      <div className="-mt-[70vh] flex items-center px-15">
        <HeroSectionLeft />
        <HeroSectionRight />
      </div>
    </div>
  );
}

export default Content;
