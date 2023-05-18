import "./Footer.scss";

import logo from "./Logo.svg";

import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <img className="logo" src={logo} />
        <h3>© 2023 Kasa. All rights reserved</h3>
      </div>
    </div>
  );
}
