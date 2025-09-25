import js from "@/assets/iconProgram/icons8-javascript-50.png"


function Js() {
  return (
    <div
    className="
      bg-white/10 backdrop-blur-md 
      border border-[#ffd600]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#ffd600]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
  >
    <img className="object-contain size-[50px]" src={js} alt="react-icon" />
  </div>
  )
}

export default Js