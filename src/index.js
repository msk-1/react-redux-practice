import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails"

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:23PM" content="Nice blog post" />
      <CommentDetail author="Alex" timeAgo="Today at 3:33PM" content="I like the subject" />
      <CommentDetail author="Jane" timeAgo="Today at 6:43PM" content="I like the writing" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
