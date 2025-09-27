import vs from "@/assets/iconProgram/icons8-visual-studio-code-2019-50.png";

function Vscode() {
  return (
    <div
      className="cursor-target
      bg-white/10 backdrop-blur-md 
      border border-[#29b6f6]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#29b6f6]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
    >
      <img className="object-contain size-[50px]" src={vs} alt="react-icon" />
    </div>
  );
}

export default Vscode;
