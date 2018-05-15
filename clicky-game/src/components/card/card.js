import React from "react";
import "./card.css";

const Card = ({ people, clicked }) => {
  const peopleList = people.map(({ image, alt, id }) => (
    <div className="cardshape" key={id} id={id}>
    <img src={image} alt={alt} onClick={() => clicked(id)}   className="cardimage"/>
    </div>
  ));

  return <ul className="list-group">{peopleList}</ul>;
};

export default Card;
