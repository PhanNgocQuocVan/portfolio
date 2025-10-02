import TextPressure from "../TextPressure";

const Footed = () => {
  return (
    <div className="relative h-[50%] bg-[#060010] md:px-2">
      <TextPressure
        text="FRONTEND"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
};

export default Footed;
