import { Main } from "./components/Main";
import { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

import { Nav } from "./components/Nav";
export default function Home() {
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");
  const ffmpeg = createFFmpeg({
    log: true,
  });
  //
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

// const doTranscode = async () => {
//   setMessage("Loading ffmpeg-core.js");
//   await ffmpeg.load();
//   setMessage("Start transcoding");
//   ffmpeg.FS("writeFile", "test.avi", await fetchFile("/flame.avi"));
//   await ffmpeg.run("-i", "test.avi", "test.mp4");
//   setMessage("Complete transcoding");
//   const data = ffmpeg.FS("readFile", "test.mp4");
//   setVideoSrc(
//     URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }))
//   );
// };
