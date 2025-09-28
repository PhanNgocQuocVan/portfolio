import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Content from "./components/my-component/Content";
import Header_menu from "./components/my-component/Header_menu";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    // 👉 thêm dòng này
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full bg-[#0A0A0A] overflow-hidden">
      <Header_menu />
      <Content />
    </div>
  );
}

export default App;
