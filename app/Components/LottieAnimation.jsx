// components/LottieAnimation.js
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lottieJson from "@public/Anime-2.json"; // adjust the path to your Lottie JSON file

const LottieAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Set a timeout to start the animation after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, 5000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Lottie
      loop={true}
      animationData={lottieJson}
      play={isPlaying}
      style={{ width: 400, height: 400 }}
    />
  );
};

export default LottieAnimation;
