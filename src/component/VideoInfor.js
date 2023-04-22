import React from 'react';
import {FaMusic} from 'react-icons/fa'

const VideoInfor =({avatar,idName, nickName, content, music})=> {
  return (
    <div className='flex flex-row'>
        <img className='w-[50px] h-[50px] rounded-full mr-3' 
          src={avatar} 
          alt=''
        />
        <div className='mr-10'>
          <div className=''>
            <a href='#' className='text-xl font-bold hover:underline'>{idName}</a>
            <a href='#' className='text-xl ml-2'>{nickName}</a>
          </div>
          <div className=''>
            {content}
          </div>
          <div className='flex flex-row items-center'>
            <FaMusic/><span className='ml-3'>{music}</span>
          </div>
        </div>
        <div>
          <button className='p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md '>Follow</button>
        </div>
    </div>
  )
}

export default VideoInfor