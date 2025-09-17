import TextPressure from "./components/TextPressure";

function App() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <TextPressure
        text="FRONTEND!"
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
}

export default App;
