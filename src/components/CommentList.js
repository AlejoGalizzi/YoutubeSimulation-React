import React from "react";
import CommentItem from "./CommentItem";
import { faker } from "@faker-js/faker";

const CommentList = () => {
  const randomComments = [];
  const aux = [];
  for (let index = 0; index < 15; index++) {
    randomComments.push(
      <CommentItem
        image={faker.image.abstract(140, 140,true)}
        username={faker.internet.userName()}
        text={faker.lorem.sentence()}
      />
    );
  }
  console.log(randomComments);
  return (<div className="ui large comments">
    <h4 className="ui dividing header">Comments</h4>
    {randomComments}
  </div>)
};

export default CommentList;
