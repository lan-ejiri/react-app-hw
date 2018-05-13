import React from "react";
import "./card.css";

const Card = ({ alt, name, image }) => (
  <div className="cardthing">
    <li> Name: {name}</li>
    <img src={image} alt={alt} />
  </div>
);

export default Card;