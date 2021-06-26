import React from "react";
import "../style/sidebar.css";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
function Sidebar() {
  return (
    <div className="sidebar">
      <h5>
        <Button>Vedant</Button>
      </h5>
      <Divider />
      <p>
        <Button>Home</Button>
      </p>
      <p>
        <Button>Groups</Button>
      </p>
      <p>
        <Button>Friends</Button>
      </p>
      <p>
        <Button>Pages</Button>
      </p>
      <p>
        <Button>Games</Button>
      </p>
      <Divider />
      <p>
        <Button>Posts</Button>
      </p>
      <p>
        <Button>Messenger</Button>
      </p>
      <p>
        <Button>Reels</Button>
      </p>
      <p>
        <Button>Activity</Button>
      </p>
    </div>
  );
}

export default Sidebar;
