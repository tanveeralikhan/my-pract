import { useEffect, useState } from "react";
import "./sliding.css";
import { useNavigate, useLocation } from "react-router-dom";
const data = [
  "https://wallpapercave.com/wp/wp13548652.jpg",
  "https://wallpapercave.com/wp/wp13548979.jpg",
  "https://wallpapercave.com/wp/wp13548966.jpg",
  "https://wallpapercave.com/wp/wp13548667.jpg",
];

const SlidingImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromValue = location.state;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlePreviousClick = () => {
    setActiveImageIndex(!activeImageIndex ? data.length : activeImageIndex - 1);
  };
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };
  useEffect(() => {
    if (fromValue?.state) {
      console.log(fromValue?.state);
    }
  }, []);
  return (
    <div className="container">
      <div className="sliding-wrapper">
        <button className={"button-class"} onClick={handlePreviousClick}>
          Previous
        </button>
        <img
          src={data[activeImageIndex]}
          className="img-class"
          alt="Wallpaper"
        />
        <button className={"button-class"} onClick={handleNextClick}>
          Next
        </button>
      </div>
      <div className="sliding-wrapper">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};
export default SlidingImage;
