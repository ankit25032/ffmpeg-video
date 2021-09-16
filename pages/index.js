import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export default function Home() {
  const [videoSrc, setVideoSrc] = useState('');
  const [message, setMessage] = useState('Click Start to transcode');
  const ffmpeg = createFFmpeg({
    log: true
  });
  const doTranscode = async () => {
    setMessage('Loading ffmpeg-core.js');
    await ffmpeg.load();
    setMessage('Start transcoding');
    ffmpeg.FS('writeFile', 'test.avi', await fetchFile('/flame.avi'));
    await ffmpeg.run('-i', 'test.avi', 'test.mp4');
    setMessage('Complete transcoding');
    const data = ffmpeg.FS('readFile', 'test.mp4');
    setVideoSrc(
      URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
    );
  };
  return (
    <div className="App">
      <p />
      <video src={videoSrc} controls />
      <br />
      <button onClick={doTranscode}>Start</button>
      <p>{message}</p>
    </div>
  );
}
