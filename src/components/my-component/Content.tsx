import Aurora from "../Aurora";
import DecryptedText from "../DecryptedText";
import RotatingText from "../RotatingText";

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
      <div className="-mt-[50vh] flex items-center">
        <div className="w-1/2">
          <p className="text-white">Hi, I'm Văn 👋</p>
          <RotatingText
            texts={["React", "Bits", "Is", "Cool!"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <div>
            <DecryptedText
              className="text-white"
              encryptedClassName="text-white"
              animateOn="view"
              sequential={true}
              text="I craft delightful digital experiences"
            />
            <DecryptedText
              className="text-white"
              encryptedClassName="text-white"
              animateOn="view"
              sequential={true}
              text="with speed, precision, and a touch of creativity."
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button className="cursor-pointer px-6 py-3 rounded-full bg-white text-black font-semibold shadow-sm border border-gray-200 hover:bg-gray-100 transition">
              View My Work
            </button>
            <button className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
              Contact Me
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Content;
