import React from "react";
import "../../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/vite.svg" alt="CONNECT logo" className="navbar__logo-img" />
        CONNECT
      </div>
    </nav>
  );
}
