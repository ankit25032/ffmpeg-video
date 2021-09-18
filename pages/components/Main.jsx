import styles from "./Home.module.css";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Main = () => {
  //hooks
  const inputfile = useRef();
  const select = useRef();
  const [vtitle, setvtitle] = useState("Select A Video File");
  //functions

  const getinput = () => {
    inputfile.current.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputarea}>
        <div onClick={getinput} className={styles.filearea}>
          <input
            onChange={() => {
              const isVideo = inputfile.current.files[0].type.includes("video");

              if (isVideo) {
                console.log("ia m herr");
                return setvtitle(
                  inputfile.current.files[0].name.substring(0, 50)
                );
              }
              alert("Select a video File");
            }}
            ref={inputfile}
            className={styles.fileinput}
            type="file"
            multiple={false}
          />
          <input
            className={styles.inputbtn}
            type="button"
            value="Select Video"
          />
          <br />
          <p className={styles.title}>{vtitle}...</p>
        </div>
      </div>

      <div>
        <video className={styles.video} src="./myvideo.mp4"></video>
      </div>
      <div className={styles.select}>
        <select
          ref={select}
          onChange={() => {
            console.log(select.current.value);
          }}
          name="codec"
          id={styles.codec}
        >
          <option value="mp4">mp4</option>
          <option value="mp2">mp2</option>
          <option value="mp3">mp1</option>
          <option value="mp0">mp0</option>
        </select>

        <button className={styles.convert}>Convert</button>
      </div>
      <div>
        <video className={styles.video} src="./myvideo.mp4"></video>
      </div>
    </div>
  );
};
