import { OrbitingCircles } from "../ui/orbiting-circles";
import C from "./iconProgram/C.dev";
import Reactjs from "./iconProgram/Reactjs";
import avatar from "@/assets/avatar.jpg";
import avatarTachNen from "@/assets/xoaThanTachNen.png";

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

        {/* 👇 OrbitingCircles đặt bên trong để cùng tâm */}
        <OrbitingCircles radius={350} iconSize={95} className="text-white">
          <Reactjs />
          <Reactjs />
          <Reactjs />
          <Reactjs />
          <Reactjs />
          <Reactjs />
          <Reactjs />
          <Reactjs />
          <Reactjs />
        </OrbitingCircles>

        <OrbitingCircles radius={240} iconSize={60} reverse>
          <C />
          <C />
          <C />
          <C />
          <C />
          <C />
          <C />
          <C />
        </OrbitingCircles>
      </div>
    </div>
  );
}

export default HeroSectionRight;
