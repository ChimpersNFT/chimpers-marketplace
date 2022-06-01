import { FC } from "react"

const AudioPlayer: FC = () => {
  return (
    <audio controls={true} loop={true} className="absolute z-[1000] top-7 mt-0.5 right-96 mr-72 hidden md:block h-16 bg-transparent border">
      <source src="/chimpers.wav" type="audio/wav"></source>
      Your browser does not support the audio element.
    </audio>
  )
}

// const AudioPlayer: FC = () => {

//   const music = useRef<HTMLAudioElement | undefined>(
//     typeof Audio !== "undefined" ? new Audio("../chimpers.wav") : undefined
//   );

//   return (
//     <div className="fixed col-span-full flex items-center justify-between gap-2 px-6 py-4 md:gap-3 md:py-6 md:px-16 z-[1000]">
//       <button className="audio"
//         onClick={(e) => {
//           const button = (e.target as HTMLButtonElement);
//           if (button.classList.contains("playing")) {
//             music.current?.pause();
//             button.classList.remove("playing");
//           } else {
//             music.current?.play();
//             button.classList.add("playing")
//           }
//         }}
//       >
//       </button>
//     </div>
//   )
// }

export default AudioPlayer;
