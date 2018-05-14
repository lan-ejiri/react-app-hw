import React from "react";
import "./card.css";

// const Card = ({ alt, name, image }) => (
//   <div className="cardshape">
//     <li> Name: {name}</li>
//     <img className="cardimage" src={image} alt={alt} />
//   </div>
// );

const Card = ({ people }) => {
  const peopleList = people.map(({ image, alt }) => (
    <div className="cardshape">
    <img src={image} alt={alt} className="cardimage"/>;
    </div>
  ));

  return <ul className="list-group">{peopleList}</ul>;
};

export default Card;
