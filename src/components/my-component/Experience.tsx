import ScrollFloat from "../ScrollFloat";
import { Timeline } from "../ui/timeline";
import Time2023 from "./timeLine/Time2023";
import Time2024 from "./timeLine/Time2024";
import Time2025 from "./timeLine/Time2025";

function Experience() {
  const data = [
    { title: "2023", content: <Time2023 /> },
    { title: "2024", content: <Time2024 /> },
    { title: "2025", content: <Time2025 /> },
  ];
  return (
    <div
      id="Experience"
      className="w-full flex flex-col items-center lg:mt-30 mt-0 mb-0 lg:mb-20"
    >
      <ScrollFloat
        containerClassName="mt-24"
        textClassName="text-white font-bold"
      >
        Experience
      </ScrollFloat>
      <Timeline data={data} />
    </div>
  );
}

export default Experience;
