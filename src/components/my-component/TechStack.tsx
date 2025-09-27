import ScrollFloat from "../ScrollFloat";
import TargetCursor from "../TargetCursor";
import IconReactGlow from "./IconReactGlow";

function TechStack() {
  return (
    <div
      id="TechStack"
      className="relative p-5 w-full flex flex-col items-center justify-center"
    >
      {/* react logo glow */}
      <div className="absolute top-0 lg:left-10 left-1">
        <IconReactGlow />
      </div>
      {/* header */}
      <ScrollFloat
        containerClassName="lg:mt-24 mt-14"
        textClassName="text-white font-bold text-2xl"
      >
        Tech Stack
      </ScrollFloat>

      <div className="w-full flex lg:flex-row  flex-col items-center lg:items-start justify-between px-20 mt-20 z-1 gap-20">
        <TargetCursor spinDuration={2} hideDefaultCursor={false} />

        <div className="lg:w-1/3 w-full flex flex-col gap-5 items-center justify-center ">
          <p className="text-white lg:text-3xl text-[16px] font-bold mb-5 ">
            FRONTEND
          </p>
          <div className="flex items-center justify-between w-full gap-3">
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#e65100] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              HTML
            </div>
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#0277bd] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              CSS
            </div>
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#ffd600] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              JS
            </div>
          </div>
          <div className="cursor-target py-5 w-full text-center border-4 border-dashed border-[#60dbfb] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
            React
          </div>
          <div className="flex items-center justify-between w-full gap-3">
            <div className="cursor-target py-5 w-full text-center border-4 border-dashed border-[#38BDF8] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              Tailwin CSS
            </div>
            <div className="cursor-target py-5 w-full text-center border-4 border-dashed border-[#3178C6] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              Typescrip
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full flex flex-col gap-5 items-center justify-center ">
          <p className="text-white lg:text-3xl text-[16px] font-bold mb-5 ">
            BACKEND
          </p>
          <div className="flex items-center justify-between w-full gap-3">
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#47A248] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              MongoDB
            </div>
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#F29111] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              MySQL
            </div>
          </div>
          <div className="cursor-target py-5 w-full text-center border-4 border-dashed border-[#339933] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
            Node.js
          </div>
        </div>

        <div className="lg:w-1/3 w-full flex flex-col gap-5 items-center justify-center ">
          <p className="text-white lg:text-3xl text-[16px] font-bold mb-5 ">
            TOOLS
          </p>
          <div className="flex items-center justify-between w-full gap-3">
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#181717] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              GitHub
            </div>
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#F05032] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              Git
            </div>
          </div>
          <div className="cursor-target py-5 w-full text-center border-4 border-dashed border-[#646CFF] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
            Vite
          </div>
          <div className="flex items-center justify-between w-full gap-3">
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#4B32C3] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              ESLint
            </div>
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#F7B93E] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              Prettier
            </div>
            <div className="cursor-target py-5 flex-1 text-center border-4 border-dashed border-[#000000] rounded-2xl text-white font-bold lg:text-[24px] text-[16px]">
              Vercel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
