import css from "@/assets/iconProgram/icons8-css3-50.png"

function Css() {
  return (
    <div
    className="
      bg-white/10 backdrop-blur-md 
      border border-[#0277bd]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#0277bd]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
  >
    <img className="object-contain size-[50px]" src={css} alt="react-icon" />
  </div>
  )
}

export default Css