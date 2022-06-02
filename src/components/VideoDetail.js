import React from "react";

const VideoDetail = ({ video }) => {
  if (video === null) {
    return <div>Loading...</div>;
  }
  const videoUrl = 'https://www.youtube.com/embed/'+video.id.videoId
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video player" src={videoUrl}></iframe>
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};



export default VideoDetail;
