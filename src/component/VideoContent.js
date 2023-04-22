import React , {useEffect,  useState, useRef } from 'react';
import { FaComment, FaHeart,FaRegHeart, FaShare } from 'react-icons/fa'
import useElementOnScreen from './useElementOnScreen';
const VideoContent=({src, like, comment, share }) =>{
  const videoRef = useRef(null)
  const [liked, setLiked] =useState(false)
  const [playing, setPlaying] = useState(false);

  const HandelVideo=()=>{
    if (playing) {
      videoRef.current.play()
      setPlaying(false);
    } else {
      videoRef.current.pause()
      setPlaying(true);
    }
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  const isVisibile = useElementOnScreen(options, videoRef)
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile]);
  
  
    return (
      <div className='flex flex-row'>
         <video
          ref={videoRef}
          onClick={HandelVideo}
          className="w-[400px] max-h-[600px] border-b-2" 
          loop preload="true" 
          src={src}/>
          <div className='flex flex-col justify-end ml-2'>
            <div  className='text-center mb-2'>
              <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
              {liked ? (
                    <FaHeart fontSize="large" onClick={() => { setLiked(!liked) } }/>
                ) : (
                    <FaRegHeart fontSize="large" onClick={() => { setLiked(!liked) } } />
                )}
              </div>
              <span>{liked? like + 1:like}</span>
            </div>
            <div  className='text-center mb-2'>
              <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                <FaComment className='text-xl'/>
              </div>
              <span >{comment}</span>
            </div>
            <div  className='text-center mb-2'>
              <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                <FaShare className='text-xl'/>
              </div>
              <span >{share}</span>
            </div>
          </div>
      </div>
    )

  
  
}

export default VideoContent