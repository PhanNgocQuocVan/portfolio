import ScrollFloat from "../ScrollFloat";
import ScrollReveal from "../ScrollReveal";

function About() {
  return (
    <div
      id="about"
      className="w-full flex items-center justify-center flex-col mt-10 lg:mt-80"
    >
      <ScrollFloat
        containerClassName="mt-24"
        textClassName="text-white font-bold"
      >
        About
      </ScrollFloat>
      <div className=" lg:px-20 px-8 lg:mt-20 mt-8 ">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-white"
        >
          👨‍💻 I’m a Frontend Developer passionate about building modern and
          user-friendly web apps. 🎓 Currently, I study at Dong Nai College of
          Technology and enhance my skills through online courses. ⚛️ My main
          stack is the React ecosystem, with strengths in React, TailwindCSS,
          and frontend technologies. 🚀 I’m a quick learner, good at
          problem-solving and research, and I often use AI tools to improve my
          workflow. 🌍 Outside of coding, I enjoy exploring new tech and playing
          ⚽ football, 🏐 volleyball, and 🏸 badminton.
        </ScrollReveal>
      </div>
    </div>
  );
}

export default About;
