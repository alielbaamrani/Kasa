import React from "react";
import Tags from "../Tags/Tags";
import "./TagsList.scss";

export default function TagsList({ data }) {
  return (
    <div className="tagsList">
      {data.data.tags.map((item, index) => (
        <Tags key={index} item={item} />
      ))}{" "}
    </div>
  );
}
