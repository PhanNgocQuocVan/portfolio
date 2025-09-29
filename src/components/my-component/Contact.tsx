import { useRef, useState } from "react";
import LaserFlow from "../LaserFlow";
import avatar from "@/assets/anh cho contact.jpeg";
import { Button } from "../ui/stateful-button";
import emailjs from "@emailjs/browser";
import Lanyard from "../Lanyard";

function Contact() {
  const revealImgRef = useRef<HTMLImageElement | null>(null);
  const form = useRef<HTMLFormElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>("");

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
        <div className="w-full flex md:flex-row flex-col h-full">
          <form
            ref={form}
            className="w-[40%] p-10 border-1  border-[#3B82F6] h-full rounded-[26px] flex flex-col items-center gap-4"
          >
            <h2 className="text-5xl font-bold mb-5">Contact Me</h2>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="text-2xl" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                className="w-full text-xl h-15 focus:outline-hidden px-8 rounded-full border-2 border-[#3B82F6] border-dashed"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="text-2xl" htmlFor="email">
                Email
              </label>
              <input
                onChange={() => setError("")}
                ref={emailRef}
                name="email"
                className="w-full text-xl h-15 focus:outline-hidden px-8 rounded-full border-2 border-[#3B82F6] border-dashed"
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
              <label htmlFor="Message">Message</label>
              <textarea
                name="message"
                className="resize-none w-full text-xl h-48 focus:outline-hidden p-8 rounded-4xl border-2 border-[#3B82F6] border-dashed"
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

          <div className="flex flex-1">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
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
