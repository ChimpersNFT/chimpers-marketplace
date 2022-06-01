import { FC, useRef } from "react"

// const AudioPlayer: FC = () => {
//   return (
//     <audio controls={true} loop={true} className="fixed z-[1000] bottom-7 right-7 hidden md:block h-16 border">
//       <source src="/chimpers.wav" type="audio/wav"></source>
//       Your browser does not support the audio element.
//     </audio>
//   )
// }

const AudioPlayer: FC = () => {

  const music = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("../chimpers.wav") : undefined
  );

  return (
      <button className="audio absolute z-[1000] right-10 top-10 hidden md:block"
        onClick={(e) => {
          const button = (e.target as HTMLButtonElement);
          if (button.classList.contains("playing")) {
            music.current?.pause();
            button.classList.remove("playing");
          } else {
            music.current?.play();
            button.classList.add("playing")
          }
        }}
      >
      </button>
  )
}

export default AudioPlayer;
