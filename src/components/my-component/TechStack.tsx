import ScrollFloat from "../ScrollFloat";
import TargetCursor from "../TargetCursor";
import IconReactGlow from "./IconReactGlow";

function TechStack() {
  return (
    <div
      id="TechStack"
      className="relative p-5 h-100 w-full flex flex-col items-center justify-center"
    >
      {/* react logo glow */}
      <div className="absolute top-0 left-10">
        <IconReactGlow />
      </div>
      {/* header */}
      <ScrollFloat
        containerClassName="mt-24"
        textClassName="text-white font-bold text-2xl"
      >
        Tech Stack
      </ScrollFloat>

      <div>
        <TargetCursor spinDuration={2} hideDefaultCursor={false} />

        <div>
          <p className="text-white">FRONTEND</p>
          <div>
            <div className="cursor-target">HTML</div>
            <div className="cursor-target">CSS</div>
            <div className="cursor-target">JS</div>
          </div>
          <div className="cursor-target">React</div>
          <div>
            <div className="cursor-target">Tailwin CSS</div>
            <div className="cursor-target">Typescrip</div>
          </div>
        </div>

        <div>
          <p className="text-white">BACKEND</p>
          <div>
            <div className="cursor-target">MongoDB</div>
            <div className="cursor-target">MySQL</div>
          </div>
          <div className="cursor-target">Node.js</div>
        </div>

        <div>
          <p className="text-white">TOOLS</p>
          <div>
            <div className="cursor-target">GitHub</div>
            <div className="cursor-target">Git</div>
          </div>
          <div className="cursor-target">Vite</div>
          <div>
            <div className="cursor-target">ESLint</div>
            <div className="cursor-target">Prettier</div>
            <div className="cursor-target">Vercel</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
