import React from "react";
import "../style/feed.css";
import Post from "../Components/Post";
import YourFeed from "./YourFeed";
import { Divider } from "@material-ui/core";
function Feed() {
  return (
    <div className="feed">
      <div className="heading">
        <p>Hi Vedant! Glad you are here.</p>
      </div>
      <Divider />
      <div className="title">
        <p>Home</p>
      </div>
      <Divider />
      <div className="post">
        <Post />
      </div>
      <Divider />
      <div className="viewpost">
        <YourFeed />
        <YourFeed />
        <YourFeed />
      </div>
    </div>
  );
}

export default Feed;
