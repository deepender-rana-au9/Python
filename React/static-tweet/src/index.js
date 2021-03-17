import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Avatar from "./components/Avatar";
import Author from "./components/Author";
import Message from "./components/Message";
import Time from "./components/Time";
import LikeButton from "./components/LikeButton";
import MoreOptionsButton from "./components/MoreOptionButton";
import RetweetButton from "./components/RetweetButton";
import ReplyButton from "./components/ReplyButton";
const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
