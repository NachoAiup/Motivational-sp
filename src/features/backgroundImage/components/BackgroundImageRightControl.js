import React from "react";
import { useSelector } from "react-redux";
import { selectImages } from "../imagesSlice";
import styles from "../Image.module.css";

const BackgroundImageRightControl = ({ setImageIndex }) => {
  const images = useSelector(selectImages);
  const handleNextClick = () => {
    setImageIndex((prevImageIndex) => {
      if (prevImageIndex === images.images.length - 1) {
        return 0;
      } else {
        return prevImageIndex + 1;
      }
    });
  };
  return (
    <button
      onClick={handleNextClick}
      className={styles.rightButton}
      aria-label="Switch to next wallpaper"
    >
      {">"}
    </button>
  );
};

export default BackgroundImageRightControl;
