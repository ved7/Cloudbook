import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import "../style/home.css";
import Rightbar from "../Components/Rightbar";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="wrapper">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
