import tailwincss from "@/assets/iconProgram/Tailwind CSS.png";

function Tailwincss() {
  return (
    <div
      className="cursor-target
      bg-white/10 backdrop-blur-md 
      border border-cyan-400/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#1976d2]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
    >
      <img
        className="object-contain size-[50px]"
        src={tailwincss}
        alt="react-icon"
      />
    </div>
  );
}

export default Tailwincss;
