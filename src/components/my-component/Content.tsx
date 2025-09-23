import Aurora from "../Aurora";
import DecryptedText from "../DecryptedText";
import RotatingText from "../RotatingText";
import avatar from "@/assets/avatar.jpg";

function Content() {
  return (
    <div>
      <Aurora
        colorStops={["#2563EB", "#60A5FA", "#1E40AF"]}
        blend={1}
        amplitude={1.0}
        speed={0.5}
      />
      {/* hero section */}
      <div className="-mt-[40vh] flex items-center px-15">
        {/* left */}
        <div className="w-1/2 flex flex-col gap-5">
          <p className="text-[#3B82F6] font-bold text-3xl">Hi, I'm Văn 👋</p>
          <div className="flex flex-row gap-2 text-5xl font-bold items-center justify-start">
            <p className="text-white">Focus</p>
            <RotatingText
              texts={[
                "Frontend Developer",
                "Web Designer",
                "React Enthusiast",
                "UI/UX Builder",
              ]}
              mainClassName=" p-1 text-white text-black overflow-hidden bg-[#BFDBFE] justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden text-[#1E3A8A]"
              transition={{ type: "keyframes", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div className="flex flex-col">
            <DecryptedText
              className="text-[#F1F5F9] text-lg sm:text-xl"
              encryptedClassName="text-white"
              animateOn="view"
              sequential={true}
              text="I craft delightful digital experiences"
            />
            <DecryptedText
              className="text-[#F1F5F9] text-lg sm:text-xl"
              encryptedClassName="text-white"
              animateOn="view"
              sequential={true}
              text="with speed, precision, and a touch of creativity."
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-sm cursor-pointer px-6 py-3 rounded-full  transition">
              View My Work
            </button>
            <button className="font-semibold cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white shadow-lg hover:opacity-90">
              Contact Me
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex items-center justify-center w-68 h-68 rounded-full bg-[#BFDBFE] shadow-2xl shadow-cyan-500/40">
            <div className="w-66 h-66 rounded-full overflow-hidden flex items-end justify-center">
              <img className=" size-80 object-cover" src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
