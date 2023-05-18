import DropdownList from "../DropdownList/DropdownList";
import Stars from "../Stars/Stars";
import Tags from "../Tags/Tags";
import "./LogementInfo.scss";
import React from "react";

export default function LogementInfo() {
  return (
    <div className="LogementInfo">
      <div className="LogementHeader">
        <div className="LogementTitle">
          <h2> Cozy loft on the Canal Saint-Martin</h2>
          <h3> Paris, Ile-de-France</h3>
          <div className="Tags">
            <Tags />
            <Tags />
            <Tags />
          </div>
        </div>
        <div className="Seller">
          <div className="SellerInfo">
            <h3 className="SellerName">Alexandre Dumas</h3>
            <div className="SellerPicture"> </div>
          </div>
          <div className="SellerStar">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </div>
        </div>
      </div>

      <div className="Dropdown">
        <DropdownList />
        <DropdownList />
      </div>
    </div>
  );
}
