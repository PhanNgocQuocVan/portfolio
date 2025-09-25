import CLanguage from "@/assets/iconProgram/C.png";

function C() {
  return (
    <div
      className="
        bg-white/10 backdrop-blur-md 
        border border-cyan-400/30 
        p-2 rounded-full 
        shadow-[0_0_15px_rgba(34,211,238,0.3)]
        hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
        transition-all duration-300
      "
    >
      <img
        className="object-contain size-[32px]"
        src={CLanguage}
        alt="react-icon"
      />
    </div>
  );
}

export default C;
