import React from "react";

import cockatriceBanner from "../assets/cockatrice_banner_white.png";
import tappedoutBanner from "../assets/tappedout_banner.png";

function Header() {
  return (
    <header className="Header">
      <img
        src={tappedoutBanner}
        className="logo tappedoutLogo"
        alt="tappedout_logo"
      />
    </header>
  );
}

export default Header;
