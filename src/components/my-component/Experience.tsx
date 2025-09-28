import ScrollFloat from "../ScrollFloat";

function Experience() {
  // const data = [
  //   {
  //     title: "vanvuive",
  //     content: <Reactjs />,
  //   },
  //   {
  //     title: "vanvuive",
  //     content: <Reactjs />,
  //   },
  //   {
  //     title: "vanvuive",
  //     content: <Reactjs />,
  //   },
  //   {
  //     title: "vanvuive",
  //     content: <Reactjs />,
  //   },
  // ];
  return (
    <div
      id="Experience"
      className="w-full flex flex-col items-center lg:mt-50 mt-10 h-500"
    >
      <ScrollFloat
        containerClassName="mt-24 lg:mb-40 mb-30"
        textClassName="text-white font-bold"
      >
        Experience
      </ScrollFloat>

      {/* <Timeline data={data} /> */}
    </div>
  );
}

export default Experience;
