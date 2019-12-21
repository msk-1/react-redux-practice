import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:23PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 3:33PM"
        content="I like the subject"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 6:43PM"
        content="I like the writing"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
