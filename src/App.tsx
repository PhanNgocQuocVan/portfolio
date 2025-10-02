import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Content from "./components/my-component/Content";
import Header_menu from "./components/my-component/Header_menu";
import BubbleMenu from "./components/BubbleMenu";

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
      <BubbleMenu
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <Header_menu />
      <Content />
    </div>
  );
}

export default App;
