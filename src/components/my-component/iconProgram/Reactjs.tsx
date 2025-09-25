import react from "@/assets/iconProgram/icons8-react-native-50.png";

function Reactjs() {
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
      <img className="object-contain" src={react} alt="react-icon" />
    </div>
  );
}

export default Reactjs;
