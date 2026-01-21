/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">首页 (Home)</a>
      <a href="#about">关于 (About)</a>
      <a href="#portfolio">项目 (Projects)</a>
      <a href="#footer">联系 (Contact)</a>
    </div>
  );
};

export default Header;
