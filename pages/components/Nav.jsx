import React from "react";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <>
      <div className={styles.navbar}>
        <img className={styles.logo} src="logo.png" alt="" />
        FFMPEG
      </div>
      <div className={styles.waves}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#181a19"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,144C960,160,1056,224,1152,250.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};
