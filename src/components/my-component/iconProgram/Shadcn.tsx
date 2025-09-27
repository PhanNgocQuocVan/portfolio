import shadcn from "@/assets/iconProgram/shadcn-ui.png";

function Shadcn() {
  return (
    <div
      className="cursor-target
      bg-white/10 backdrop-blur-md 
      border border-[#fff]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#fff]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
    >
      <img
        className="object-contain size-[32px] rounded-[5px]"
        src={shadcn}
        alt="react-icon"
      />
    </div>
  );
}

export default Shadcn;
