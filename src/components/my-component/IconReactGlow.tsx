import CircularText from "../CircularText";

function IconReactGlow() {
  return (
    <div className="relative w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] group">
      <CircularText
        text="REACT ✦ REACT ✦ REACT ✦ "
        onHover="speedUp"
        spinDuration={20}
        className="z-2 "
      />

      <div className="absolute top-50 left-0 w-[400px] h-[400px] bg-[#3B82F6] blur-[350px] group-hover:blur-[300px] z-1 rounded-full transition-all"></div>
      <div className="absolute bottom-50 left-0 w-[400px] h-[400px] bg-[#1E3A8A] blur-[350px] group-hover:blur-[300px] z-1 rounded-full transition-all"></div>
    </div>
  );
}

export default IconReactGlow;
