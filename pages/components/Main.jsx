import styles from "./Home.module.css";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Main = () => {
  //hooks
  const inputfile = useRef();
  const [vtitle, setvtitle] = useState("Select A Video File");
  //functions
  const notify = () => toast("Wow so easy!");
  const getinput = () => {
    inputfile.current.click();
    notify();
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputarea}>
        <div onClick={getinput} className={styles.filearea}>
          <input
            onChange={() => {
              if (inputfile.current.files[0].type.includes("video"));
              {
                return setvtitle(
                  inputfile.current.files[0].name.substring(0, 50)
                );
              }
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
      <div className="video">
        <video src="./myvideo.mp4"></video>
      </div>
      <div className="video">
        <video src="./myvideo.mp4"></video>
      </div>
    </div>
  );
};
