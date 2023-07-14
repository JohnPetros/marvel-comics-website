import { Player as Animation } from "@lottiefiles/react-lottie-player";
import Spiner from "../../../public/animations/spinner.json";

interface SpinnerProps {
  size: number;
}

export function Spinner({ size }: SpinnerProps) {
  return (
    <Animation
      autoplay={true}
      loop={true}
      controls={true}
      src={Spiner}
      style={{ height: `${size}px`, width: `${size}px` }}
    />
  );
}
