"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // scrollYProgress chạy từ 0 → 1 khi section Experience scroll hết
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Line cao dần từ 0% → 100% chiều cao section
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="w-full" ref={wrapperRef}>
      {/* Header */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-5xl mb-4 text-white dark:text-white max-w-4xl">
          My Journey Since 2023
        </h2>
        <p className="text-[#F9FAFB] dark:text-neutral-300 text-sm md:text-2xl max-w-sm">
          Since 2023, I have been building a strong foundation in frontend
          development through projects and self-learning, steadily expanding my
          experience.
        </p>
      </div>

      {/* Timeline items */}
      <div className="relative w-full mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex lg:justify-center justify-between lg:p-0 px-[4%] pt-10 md:pt-40 md:gap-[5%] w-full"
          >
            {/* Dot + Year */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center justify-center top-40 self-start w-[30%]">
              <div className="h-10 translate-x-[50%] absolute right-[5%] md:right-[33%]  w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pr-[20%] md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative lg:w-[45%] w-[65%] mb-20">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Line chạy trong section */}
        <div
          className="absolute md:left-[30%] left-[30%] top-0 overflow-hidden w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent via-neutral-200 dark:via-neutral-700 to-transparent 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: "100%" }} // cao = section
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className=" inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#3B82F6] via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
