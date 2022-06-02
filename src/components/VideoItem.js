import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) => {
  return (
    <div className='video-item item'>
      <div className='ui small image'>
        <img src={video.snippet.thumbnails.medium.url}/>
      </div>
      <div className='middle aligned content'>
        {video.snippet.title}
      </div>

    </div>
  );
};

export default VideoItem;