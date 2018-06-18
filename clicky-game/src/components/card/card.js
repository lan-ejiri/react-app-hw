import React, { Component } from "react";
import "./card.css";

// const Card = ({ people, clicked }) => {
//   const peopleList = people.map(({ image, alt, id }) => (
//     <div className="cardshape" key={id} id={id}>
//     <img src={image} alt={alt} onClick={() => clicked(id)}   className="cardimage"/>
//     </div>
//   ));

//   return <ul className="list-group">{peopleList}</ul>;
// };

class Card extends Component {
  state = {
    image: this.props.src,
    name: this.props.name,
    id: this.props.id,
    afterClicked: this.props.afterClicked
  };

  render() {
    return (
      <img
        key={this.state.name}
        src={this.state.image}
        className="cardimage cardshape"
        alt={this.state.name}
        id={this.state.id}
        onClick={this.state.afterClicked}
      />
    );
  }
}

export default Card;
