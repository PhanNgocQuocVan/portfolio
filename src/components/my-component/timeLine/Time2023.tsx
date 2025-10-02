import { LinkPreview } from "@/components/ui/link-preview";
import chungchibase from "@/assets/chungchi/Phan Ngọc Quốc Văn Information Technology Onboarding Certificate.png";

function Time2023() {
  return (
    <div className="w-full  lg:rounded-[64px] rounded-4xl lg:p-10 p-6 border-4 border-dashed flex flex-col gap-5 items-center ">
      <div className="flex flex-col items-start gap-2 text-2xl text-white">
        <h1 className="text-[#3B82F6] shadow-[#2563EB] lg:text-4xl text-2xl mb-3 font-bold">
          Foundation Year
        </h1>
        <p className="text-xl md:text-2xl">
          In my first year, I focused on strengthening my fundamental
          programming skills by completing the Basic Programming course on F8
          and earning a certificate.
        </p>
        <div className="hidden md:block">
          To reinforce my knowledge, I also built several personal{" "}
          <LinkPreview
            url="https://phanngocquocvan.github.io/start/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2563EB] to-[#3B82F6]"
          >
            projects
          </LinkPreview>{" "}
          to practice and apply what I had learned.
        </div>
      </div>
      <img
        className="w-full object-contain rounded-[32px]"
        src={chungchibase}
        alt=""
      />
    </div>
  );
}

export default Time2023;
