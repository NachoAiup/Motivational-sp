import React from "react";
import styles from "../Image.module.css";

const BackgroundImageLeftControl = () => {
  return (
    <button
      className={styles.leftButton}
      aria-label="Switch to previous wallpaper"
    >
      {"<"}
    </button>
  );
};

export default BackgroundImageLeftControl;
