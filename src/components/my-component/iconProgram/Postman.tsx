import postman from "@/assets/iconProgram/Postman.png"

function Postman() {
  return (
    <div
    className="
      bg-white/10 backdrop-blur-md 
      border border-[#f37036]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#f37036]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
  >
    <img className="object-contain size-[32px]" src={postman} alt="react-icon" />
  </div>
  )
}

export default Postman