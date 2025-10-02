import { OrbitingCircles } from "../ui/orbiting-circles";
import C from "./iconProgram/C.dev";
import Reactjs from "./iconProgram/Reactjs";
import avatar from "@/assets/avatar.jpg";
import avatarTachNen from "@/assets/xoaThanTachNen.png";
import Typescrip from "./iconProgram/Typescrip";
import Tailwincss from "./iconProgram/Tailwincss";
import Nodejs from "./iconProgram/Nodejs";
import ChatGpt from "./iconProgram/ChatGpt";
import Html from "./iconProgram/Html";
import Css from "./iconProgram/Css";
import Js from "./iconProgram/Js";
import Vscode from "./iconProgram/Vscode";
import Reactrouter from "./iconProgram/React-router";
import Ant from "./iconProgram/Ant";
import Github from "./iconProgram/Github";
import Sass from "./iconProgram/Sass";
import Net from "./iconProgram/Net";
import Postman from "./iconProgram/Postman";
import Shadcn from "./iconProgram/Shadcn";
import { useEffect, useState } from "react";

function HeroSectionRight() {
  const [inMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handelResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);
  return (
    <div className="md:w-1/2 w-full flex items-center justify-center relative h-[900px]">
      <div className="flex items-center justify-center md:w-91 md:h-91 w-60 h-60 rounded-full bg-[#BFDBFE] shadow-[0_0_20px_0_#BFDBFE]">
        <div className=" md:w-89 md:h-89 w-58 h-58 rounded-full overflow-hidden flex items-end justify-center">
          <img
            className=" md:size-110 size-80 object-cover"
            src={avatar}
            alt=""
          />
        </div>
        <img
          className="md:size-110 size-80 object-cover absolute md:top-47 top-62 z-1"
          src={avatarTachNen}
          alt=""
        />

        <OrbitingCircles
          radius={inMobile ? 280 : 350}
          iconSize={95}
          className="text-white"
        >
          <Reactjs />
          <Typescrip />
          <Tailwincss />
          <Nodejs />
          <ChatGpt />
          <Html />
          <Css />
          <Js />
          <Vscode />
        </OrbitingCircles>

        <OrbitingCircles radius={inMobile ? 180 : 240} iconSize={50} reverse>
          <C />
          <Reactrouter />
          <Ant />
          <Github />
          <Sass />
          <Net />
          <Postman />
          <Shadcn />
        </OrbitingCircles>
      </div>
    </div>
  );
}

export default HeroSectionRight;
