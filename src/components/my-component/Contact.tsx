import { useEffect, useRef, useState } from "react";
import LaserFlow from "../LaserFlow";
import avatar from "@/assets/anh cho contact.jpeg";
import { Button } from "../ui/stateful-button";
import emailjs from "@emailjs/browser";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import fb from "@/assets/social icon/facebook.png";
import zl from "@/assets/social icon/zalo.png";
import gh from "@/assets/social icon/github.png";
import ig from "@/assets/social icon/instagram.png";
import lk from "@/assets/social icon/linkedin.png";
import tt from "@/assets/social icon/tiktok.png";

const people = [
  {
    id: 1,
    name: "gitHub",
    designation: "PhanNgocQuocVan",
    link: "https://github.com/PhanNgocQuocVan",
    image: gh,
  },
  {
    id: 2,
    name: "facebook",
    designation: "văn vui vẻ",
    link: "https://www.facebook.com/van.vui.ve.995608/",
    image: fb,
  },

  {
    id: 3,
    name: "instagram",
    designation: "văn vui vẻ",
    link: "https://www.instagram.com/van_vui_ve84?igsh=MTR2M21xeXNjdDRsbQ%3D%3D&utm_source=qr",
    image: ig,
  },
  {
    id: 4,
    name: "linkedin",
    designation: "phan ngọc quốc văn",
    link: "https://www.linkedin.com/in/phan-ng%E1%BB%8Dc-qu%E1%BB%91c-v%C4%83n-280940301/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: lk,
  },
  {
    id: 5,
    name: "tiktok",
    designation: "văn vui vẻ",
    link: "https://www.tiktok.com/@vvv_van_vvv?_t=ZS-90CWTykO8w9&_r=1",
    image: tt,
  },
  {
    id: 6,
    name: "Zalo",
    designation: "Văn Phan",
    link: "https://zalo.me/0372594819",
    image: zl,
  },
];

function Contact() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);
  const form = useRef<HTMLFormElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup khi component bị unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlesubmit = async (e: React.FormEvent) => {
    if (!emailRef.current) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRef.current?.value)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      await sendEmail(e); // chờ gửi xong
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log(result.text);
      (form.current as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      id="Contact"
      style={{
        height: isMobile ? "900px" : "1300px",
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
          height: "58%",
          backgroundColor: "#060010",
          borderRadius: "30px",
          border: "2px solid #3B82F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          zIndex: 6,
          padding: "2%",
        }}
      >
        <div className="w-full flex lg:flex-row flex-col h-full gap-10">
          <form
            ref={form}
            className="lg:w-[40%] w-full p-10 border-1  border-[#3B82F6] h-full rounded-[26px] flex flex-col items-center gap-4"
          >
            <h2 className="md:text-5xl text-2xl font-bold mb-5">Contact Me</h2>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="md:text-2xl text-sm" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                className="w-full md:text-xl text-sm md:h-15 h-10 focus:outline-hidden md:px-8 px-5 rounded-full border-2 border-[#3B82F6] border-dashed"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="md:text-2xl text-sm" htmlFor="email">
                Email
              </label>
              <input
                onChange={() => setError("")}
                ref={emailRef}
                name="email"
                className="w-full md:text-xl text-sm md:h-15 h-10 focus:outline-hidden md:px-8 px-5 rounded-full border-2 border-[#3B82F6] border-dashed"
                type="text"
                id="email"
                placeholder="you@example.com"
                required
              />
              {error ? (
                <p className="text-sm text-red-600 font-bold">{error}</p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="md:text-2xl text-sm" htmlFor="Message">
                Message
              </label>
              <textarea
                name="message"
                className="resize-none w-full md:text-xl text-sm md:h-48 h-20 focus:outline-hidden md:p-8 p-2 md:rounded-4xl rounded-xl border-2 border-[#3B82F6] border-dashed"
                id="Message"
                placeholder="Write your message here..."
              />
            </div>
            <div className="w-full flex items-start">
              <Button type="button" onClick={handlesubmit}>
                Send message
              </Button>
            </div>
          </form>

          <div className="lg:flex hidden flex-col items-center h-full justify-between flex-1">
            <TextRevealCard
              text="Work With Me"
              revealText="Create Something New"
            >
              <TextRevealCardTitle>Let’s Work Together</TextRevealCardTitle>
              <TextRevealCardDescription>
                I’m always open to new projects, ideas, or collaborations. Drop
                me a message and let’s make it happen.
              </TextRevealCardDescription>
            </TextRevealCard>
            <div className="flex flex-col h-[30%] items-start w-full justify-center gap-5">
              <h1 className="text-4xl font-bold">social media</h1>
              <div className="flex flex-row items-center w-full">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>
        </div>
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
