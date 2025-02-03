import React from 'react';
import video from '../assets/video.mp4';

const Video = () => {
  return (
    <>
      <div className="w-full h-[100vh] relative">
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-20'>

        </div>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
