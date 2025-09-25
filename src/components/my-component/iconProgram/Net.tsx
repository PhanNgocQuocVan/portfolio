import net from "@/assets/iconProgram/NET.png"

function Net() {
  return (
    <div
    className="
      bg-white/10 backdrop-blur-md 
      border border-[#148fff]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#148fff]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
  >
    <img className="object-contain size-[32px]" src={net} alt="react-icon" />
  </div>
  )
}

export default Net