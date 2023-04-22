import React, { useEffect, useRef, useState } from "react";
import VideoInfor from "./VideoInfor";
import VideoContent from "./VideoContent";
const Video = ({ data }) => {
  return (
    <div className="snap-start max-w-[600px] border-b-2 pb-4 pt-5" >
      <VideoInfor {...data}/>
      <VideoContent {...data}/>
    </div>
  );
};
export default Video;