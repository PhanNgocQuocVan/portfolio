import { LinkPreview } from "@/components/ui/link-preview";
import react from "@/assets/chungchi/react.png";

function Time2025() {
  return (
    <div className="w-full lg:rounded-[64px] rounded-4xl lg:p-10 p-6 border-4 border-dashed flex flex-col gap-5 items-center ">
      <div className="flex flex-col items-start gap-2 text-2xl text-white">
        <h1 className="text-[#3B82F6] shadow-[#2563EB] lg:text-4xl text-2xl mb-3 font-bold">
          Final Year & Career Preparation
        </h1>
        <div className="text-xl md:text-2xl">
          “I completed a Basic ReactJS course on Udemy and earned the
          certificate, strengthening my skills through large-scale personal{" "}
          <LinkPreview
            url="https://clone-pinterest-wheat.vercel.app/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2563EB] to-[#3B82F6]"
          >
            projects
          </LinkPreview>{" "}
          . I was also honored to receive a scholarship from my university.
        </div>
      </div>

      <img
        className="w-full object-contain rounded-2xl lg:rounded-[32px]"
        src={react}
        alt=""
      />
    </div>
  );
}

export default Time2025;
