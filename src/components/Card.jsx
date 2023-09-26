import React from "react";

function Card(props) {
  return (
    <div className="frame">
      <div className="text-wrapper">{props.title}</div>
      <div className="group-wrapper">
        <img className="group" alt="Group" src={props.img} />
      </div>
    </div>
  );
}

export default Card;
