import React from 'react';
import VideoContent from './VideoContent';
import VideoInfor from './VideoInfor';


function video() {
  return (
    <div className=' max-w-[600px] p-3'>
      <VideoInfor/>
      <VideoContent/>
    </div>
  )
}

export default video