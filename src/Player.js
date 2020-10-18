import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ Spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
