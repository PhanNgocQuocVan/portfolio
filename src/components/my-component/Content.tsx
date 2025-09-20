import Aurora from "../Aurora";

function Content() {
  return (
    <div>
      <Aurora
        colorStops={["#2563EB", "#60A5FA", "#1E40AF"]}
        blend={1}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  );
}

export default Content;
