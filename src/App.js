import React , { useEffect,useMemo, useState } from 'react';
import './App.css';
import Video from './component/Video';
import db from './firebase';

function App() {
  const [video, setVideos] =useState([]);
  useEffect(()=>{

    db.collection("video").get().then((querySnapshot)=>{
      setVideos(querySnapshot.docs.map(doc =>doc.data()))

    })
  },[]);
  return (
   
   
      <div id='focus' tabIndex="1" className="flex flex-col items-center snap-y snap-mandatory overflow-scroll overflow-y-hidden h-screen ">
        {video.map(video=><Video data={video}/>)}
      
      </div>
      
   
  );
}
export default App;
