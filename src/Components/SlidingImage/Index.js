import { useState } from "react";
import "./sliding.css";
const data = [
  "https://wallpapercave.com/wp/wp13548652.jpg",
  "https://wallpapercave.com/wp/wp13548979.jpg",
  "https://wallpapercave.com/wp/wp13548966.jpg",
  "https://wallpapercave.com/wp/wp13548667.jpg",
];

const SlidingImage = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlePreviousClick = () => {
    setActiveImageIndex(!activeImageIndex ? data.length : activeImageIndex - 1);
  };
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };
  return (
    <div className="sliding-wrapper">
      <button className={"button-class"} onClick={handlePreviousClick}>
        Previous
      </button>
      <img src={data[activeImageIndex]} className="img-class" alt="Wallpaper" />
      <button className={"button-class"} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};
export default SlidingImage;
