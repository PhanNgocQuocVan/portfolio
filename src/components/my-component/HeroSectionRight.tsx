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

function HeroSectionRight() {
  return (
    <div className="w-1/2 flex items-center justify-center relative h-[900px]">
      <div className="flex  items-center justify-center w-91 h-91 rounded-full bg-[#BFDBFE] shadow-[0_0_20px_0_#BFDBFE]">
        <div className=" w-89 h-89 rounded-full overflow-hidden flex items-end justify-center">
          <img className=" size-110 object-cover" src={avatar} alt="" />
        </div>
        <img
          className="size-110 object-cover absolute top-47 z-1"
          src={avatarTachNen}
          alt=""
        />

        
        <OrbitingCircles radius={350} iconSize={95} className="text-white">
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

        <OrbitingCircles radius={240} iconSize={50} reverse>
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
