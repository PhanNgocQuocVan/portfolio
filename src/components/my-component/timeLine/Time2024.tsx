import { LinkPreview } from "@/components/ui/link-preview";
import HTMLCSS from "@/assets/chungchi/Phan Ngọc Quốc Văn HTML & CSS Certificate.png";
import JS from "@/assets/chungchi/Phan Ngọc Quốc Văn JavaScript Basic Certificate.png";

function Time2024() {
  return (
    <div className="w-full  lg:rounded-[64px] rounded-4xl lg:p-10 p-6 border-4 border-dashed flex flex-col gap-5 items-center ">
      <div className="flex flex-col items-start gap-2 text-2xl text-white">
        <h1 className="text-[#3B82F6] shadow-[#2563EB] lg:text-4xl text-2xl mb-3 font-bold">
          Growing with Projects
        </h1>
        <div className="text-xl md:text-2xl">
          I completed an HTML & CSS and Javascript certificate at F8, then
          advanced my skills by building professional personal{" "}
          <LinkPreview
            url="https://phanngocquocvan.github.io/app-music/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2563EB] to-[#3B82F6]"
          >
            projects
          </LinkPreview>{" "}
          and taking on freelance work — including developing a{" "}
          <LinkPreview
            url="https://yvnlaw.com/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2563EB] to-[#3B82F6]"
          >
            website
          </LinkPreview>{" "}
          for a law firm.
        </div>
      </div>
      <div className="w-full flex gap-3">
        <img
          className="w-1/2 object-contain rounded-2xl lg:rounded-[32px]"
          src={HTMLCSS}
          alt=""
        />
        <img
          className="w-1/2 object-contain rounded-2xl lg:rounded-[32px]"
          src={JS}
          alt=""
        />
      </div>
    </div>
  );
}

export default Time2024;
