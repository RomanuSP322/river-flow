import React from 'react';
import wakesurfVideo from "../../images/wakesurf-mini.mp4";


function Video({videoRef}) {
  return  <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className='wakesurf__video'

>
  <source src={wakesurfVideo} type='video/mp4' />
</video>
}

export default Video;