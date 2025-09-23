import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Content from "./components/my-component/Content";
import Header_menu from "./components/my-component/Header_menu";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // thời gian trễ khi cuộn
      easing: (t) => 1 - Math.pow(1 - t, 3), // easing giống Apple
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-500 bg-[#0A0A0A]">
      <Header_menu />
      <Content />
    </div>
  );
}

export default App;
