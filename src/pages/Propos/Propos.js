import "./Propos.scss";
import React from "react";
import Header from "src/components/Header/Header";
import DropdownList from "src/components/DropdownList/DropdownList";
import DropdownText from "src/components/DropdownText/DropdownText";

export default function Propos() {
  return (
    <div className="Propos">
      <Header />
      <div className="Dropdown">
        <DropdownText />
        <DropdownText />
        <DropdownText />
        <DropdownText />
      </div>
    </div>
  );
}
