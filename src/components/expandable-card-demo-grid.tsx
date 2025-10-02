"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import PinterestPj from "@/assets/project/ProjectPinterset.png";
import AppMusic from "@/assets/project/appMusic.png";
import LangdingPage from "@/assets/project/reactFramerMotion.png";
import ThoiTiet from "@/assets/project/thoiTiet.png";
import Github from "./my-component/iconProgram/Github";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="md:w-[80%] w-[90%] md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full lg:h-110 h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top m-auto"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 lg:px-20 px-6 mt-5">
                  <div className="flex flex-col gap-1 w-[58%]">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-[#111827] dark:text-neutral-400 text-sm font-bold"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="font-bold text-[#111827] dark:text-neutral-200 lg:text-4xl text-2xl"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="md:px-10 px-5 md:py-3 py-2 md:text-md text-sm rounded-full font-bold bg-black text-white "
                    >
                      {active.ctaText}
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.gitLink}
                      target="_blank"
                      className="text-sm rounded-full font-bold bg-white"
                    >
                      <Github />
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative lg:px-20 p-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-30 lg:h-40 md:h-fit  flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-5 lg:px-30 px-8">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="lg:w-140 w-full m-auto p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="lg:h-75 h-50 w-full  rounded-lg object-contain object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col gap-3 h-30">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-3xl font-bold"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Clone Pinterest",
    title: "React,supabase,TailWind CSS",
    src: PinterestPj,
    ctaText: "View",
    ctaLink: "https://clone-pinterest-wheat.vercel.app",
    gitLink: "https://github.com/PhanNgocQuocVan/clone_pinterest",
    content: () => {
      return (
        <p>
          I built a Pinterest clone using React, TypeScript, TailwindCSS, Axios,
          and TanStack Query. The UI is designed to closely resemble the
          original Pinterest layout, featuring a responsive grid and smooth user
          interactions. For the backend, I integrated Supabase to handle
          authentication, database, and API services. This project demonstrates
          my ability to create a modern full-stack web application with
          efficient state management, API integration, and pixel-perfect UI
          implementation.
        </p>
      );
    },
  },
  {
    description: "App music Mobile UI",
    title: "HTML,CSS,JS",
    src: AppMusic,
    ctaText: "View",
    ctaLink: "https://phanngocquocvan.github.io/app-music/",
    gitLink: "https://github.com/PhanNgocQuocVan/app-music",
    content: () => {
      return (
        <p>
          I designed and built a mobile music app UI inspired by Apple Music
          using HTML, CSS, and JavaScript. The interface is optimized for mobile
          devices, featuring a modern player screen with album artwork, playback
          controls, and a "Playing Next" section. This project focuses on clean
          design, smooth layout, and a user experience that reflects real-world
          music streaming applications.
        </p>
      );
    },
  },

  {
    description: "landing page",
    title: "React,framer-motion,TailWind CSS",
    src: LangdingPage,
    ctaText: "View",
    ctaLink: "https://react-framer-motion-hcsa.vercel.app",
    gitLink: "https://github.com/PhanNgocQuocVan/reactFramerMotion",
    content: () => {
      return (
        <p>
          I created a responsive landing page using React, TailwindCSS, and
          Framer Motion. The design highlights a modern payment solution with
          smooth animations, interactive elements, and a clean layout. The page
          is fully responsive, ensuring a seamless user experience across
          desktop, tablet, and mobile devices.
        </p>
      );
    },
  },
  {
    description: "Weather App",
    title: "HTML,CSS,JS,API",
    src: ThoiTiet,
    ctaText: "View",
    ctaLink: "https://phanngocquocvan.github.io/weather-ui/",
    gitLink: "https://github.com/PhanNgocQuocVan/weather-ui",
    content: () => {
      return (
        <p>
          I built a Weather App using HTML, CSS, JavaScript, and a Weather API.
          The app fetches real-time weather data and displays key information
          such as temperature, humidity, and forecast. The UI is clean and
          minimal, with a card-style layout placed on top of a dynamic
          background, providing users with both functionality and an engaging
          design.
        </p>
      );
    },
  },
];
