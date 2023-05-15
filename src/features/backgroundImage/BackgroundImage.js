import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectImages, fetchImageUrls } from "./imagesSlice";
import styles from "./Image.module.css";

const BackgroundImage = ({ imageIndex }) => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImageUrls());
  }, [dispatch]);

  return (
    <div className={styles.image}>
      <img src={images.images[imageIndex]} alt="" id="background-image" />
    </div>
  );
};

export default BackgroundImage;
