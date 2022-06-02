import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}  
      className="video-item item"
    >
      <div className="ui small image">
        <img src={video.snippet.thumbnails.medium.url} alt="item" />
      </div>
      <div className="middle aligned content">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
