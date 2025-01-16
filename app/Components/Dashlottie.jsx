import { useEffect } from "react";
import lottie from "lottie-web";

const Dashlottie = () => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById("lottie-animation"), // Container element
      renderer: "svg", // Type of renderer (svg, canvas, html)
      loop: true, // Loop the animation
      autoplay: true, // Automatically start the animation
      path: "public/Animations/dashboard.json", // Path to your Lottie JSON file
    });

    // Cleanup the animation on unmount
    return () => animation.destroy();
  }, []);

  return (
    <div
      id="lottie-animation"
      className="absolute top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default Dashlottie;
