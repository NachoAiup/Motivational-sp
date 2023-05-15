import React, { useState } from "react";
import Goals from "./features/goals/Goals";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";
import styles from "./App.module.css";
import Quotes from "./features/quotes/Quotes";

export default function App() {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={styles.app}>
      <BackgroundImage imageIndex={imageIndex} />
      <aside className={styles.leftAside}>
        <BackgroundImageLeftControl setImageIndex={setImageIndex} />
      </aside>
      <Goals />
      <aside className={styles.rightAside}>
        <BackgroundImageRightControl setImageIndex={setImageIndex} />
      </aside>
      <footer>
        <Quotes />
      </footer>
    </div>
  );
}
