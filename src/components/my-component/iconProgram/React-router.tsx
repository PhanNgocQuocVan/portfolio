import router from "@/assets/iconProgram/react-router-svgrepo-com.png"


function Reactrouter() {
  return (
    <div
    className="
      bg-white/10 backdrop-blur-md 
      border border-[#d0021b]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#d0021b]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
  >
    <img className="object-contain size-[32px]" src={router} alt="react-icon" />
  </div>
  )
}

export default Reactrouter