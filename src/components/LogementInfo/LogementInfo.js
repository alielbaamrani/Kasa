import Collapse from "../Collapse/Collapse";
import StarList from "../StarsList/StarList";
import TagsList from "../TagsList/TagsList";
import "./LogementInfo.scss";
import React from "react";

export default function LogementInfo(findDataById) {
  const HostPicture = findDataById.data.host.picture;
  const description = findDataById.data.description;
  const equipementsList = findDataById.data.equipments;


  return (
    <div className="LogementInfo">
      <div className="LogementHeader">
        <div className="LogementTitle">
          <h2>{findDataById.data.title} </h2>
          <h3>{findDataById.data.location}</h3>
          <TagsList data={findDataById} />
        </div>
        <div className="Seller">
          <div className="SellerInfo">
            <h3 className="SellerName">{findDataById.data.host.name}</h3>
            <img className="SellerPicture" src={HostPicture}></img>
          </div>
          <div className="SellerStar">
            <StarList />
          </div>
        </div>
      </div>

      <div className="Dropdown">
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={"Équipements"} content={equipementsList} />
          </div>
        </div>
      </div>
    </div>
  );
}
