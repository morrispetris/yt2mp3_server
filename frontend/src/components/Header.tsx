import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <Link to="/">Home</Link>
      <Link to="/view/in_progress">In progress</Link>
      <Link to="/view/downloads">Downloads</Link>
    </header>
  );
}

export default Header;
