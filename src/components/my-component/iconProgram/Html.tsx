import html from "@/assets/iconProgram/icons8-html-5-50.png";

function Html() {
  return (
    <div
      className="cursor-target
      bg-white/10 backdrop-blur-md 
      border border-[#e65100]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#e65100]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
    >
      <img className="object-contain size-[50px]" src={html} alt="react-icon" />
    </div>
  );
}

export default Html;
