import { FC } from "react"

const AudioPlayer: FC = () => {
  return (
    <audio controls={true} autoPlay={true} loop={true} className="h-10 w-64">
      <source src="/chimpers.wav" type="audio/wav"></source>
      Your browser does not support the audio element.
    </audio>
  )
}

// const AudioPlayer: FC = () => {

//   const music = useRef<HTMLAudioElement | undefined>(
//     typeof Audio !== "undefined" ? new Audio("../chimpers.wav") : undefined
//   );
//   music.current?.play();

//   return (
//     <button className="audio playing"
//       onClick={(e) => {
//         const button = (e.target as HTMLButtonElement);
//         if (button.classList.contains("playing")) {
//           music.current?.pause();
//           button.classList.remove("playing");
//         } else {
//           music.current?.play();
//           button.classList.add("playing")
//         }
//       }}
//     >
//     </button>
//   )
// }

export default AudioPlayer;