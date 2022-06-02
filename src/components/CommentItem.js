import React from "react";

const CommentItem = ({ image, username, text }) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={image} alt="avatar image"/>
      </a>
      <div className="content">
        <a className="author">{username}</a>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentItem;
