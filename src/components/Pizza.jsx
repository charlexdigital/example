import React from "react";
import "./Pizza.css";

function Pizza(props) {
  return (
    <div className="card">
      <img src={props.photo} />
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <p>A${props.price}.00</p>
      <span className="colorcat" style={{ backgroundColor: props.color }}>
        {props.hashtag}
        {props.emoji}
      </span>
    </div>
  );
}
export default Pizza;
