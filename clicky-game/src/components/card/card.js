import React from "react";
import "./card.css";

const Card = ({ people }) => {
  const peopleList = people.map(({ image, alt }) => (
    <div className="cardshape">
    <img src={image} alt={alt} className="cardimage"/>
    </div>
  ));

  return <ul className="list-group">{peopleList}</ul>;
};

export default Card;
