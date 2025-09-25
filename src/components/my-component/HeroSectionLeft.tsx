import RotatingText from "../RotatingText";
import DecryptedText from "../DecryptedText";

function HeroSectionLeft() {
  return (
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
          className="text-[#F1F5F9] text-lg sm:text-xl font-[500]"
          encryptedClassName="text-white"
          animateOn="view"
          sequential={true}
          text="I craft delightful digital experiences"
        />
        <DecryptedText
          className="text-[#F1F5F9] text-lg sm:text-xl font-[500]"
          encryptedClassName="text-white"
          animateOn="view"
          sequential={true}
          text="with speed, precision, and a touch of creativity."
        />
      </div>
      <div className="flex gap-4 mt-6">
        <button className="font-semibold bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-sm cursor-pointer px-6 py-3 rounded-full  transition">
          View My Work
        </button>
        <button className="font-semibold cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white shadow-lg hover:opacity-90">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default HeroSectionLeft;
