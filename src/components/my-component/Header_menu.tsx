import GlassSurface from "../GlassSurface";
import PillNav from "../PillNav";

function Header_menu() {
  return (
    <div className="w-full fixed flex justify-center z-100 top-2">
      <GlassSurface
        width={670}
        height={50}
        backgroundOpacity={0}
        saturation={0.7}
        distortionScale={-80}
        borderWidth={0} // gần như không thấy viền
      >
        <PillNav
          logoAlt="Company Logo"
          items={[
            { label: "About", href: "#about" },
            { label: "Tech Stack", href: "#TechStack" },
            { label: "Projects", href: "#Projects" },
            { label: "Experience", href: "#Experience" },
            { label: "Contact", href: "#Contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </GlassSurface>
    </div>
  );
}

export default Header_menu;
