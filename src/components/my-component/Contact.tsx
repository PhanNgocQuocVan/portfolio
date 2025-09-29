import { useRef } from "react";
import LaserFlow from "../LaserFlow";
import avatar from "@/assets/anh cho contact.jpeg";

function Contact() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div
      id="Contact"
      style={{
        height: "1300px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.1}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={-0.2}
        verticalBeamOffset={0.1}
        color="#3B82F6"
      />

      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "86%",
          height: "60%",
          backgroundColor: "#060010",
          borderRadius: "20px",
          border: "2px solid #3B82F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          zIndex: 6,
        }}
      >
        Nội dung ở đây
      </div>

      <img
        className="hidden md:block"
        ref={revealImgRef}
        src={avatar}
        alt="Reveal effect"
        style={
          {
            position: "absolute",
            height: "50%",
            objectFit: "cover",
            top: "-2%",
            zIndex: 5,
            mixBlendMode: "lighten",
            opacity: 0.3,
            pointerEvents: "none",
            "--mx": "-9999px",
            "--my": "-9999px",
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            maskImage:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          } as unknown as React.CSSProperties
        }
      />
    </div>
  );
}

export default Contact;
