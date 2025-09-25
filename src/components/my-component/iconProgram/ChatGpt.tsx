import chatgpt from "@/assets/iconProgram/icons8-chatgpt-50.png"

function ChatGpt() {
  return (
    <div
    className="
      bg-white/10 backdrop-blur-md 
      border border-[#546e7a]/30 
      p-2 rounded-full 
      shadow-[0_0_15px_#546e7a]
      hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
      transition-all duration-300
    "
  >
    <img className="object-contain size-[50px]" src={chatgpt} alt="react-icon" />
  </div>
  )
}

export default ChatGpt