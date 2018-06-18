import React, { Component } from "react";
import cards from "./cards.json";
import "./components/card/card.css";

import Card from "./components/card/card.js";

class App extends Component {
  state = {
    cards: cards
  };

  shuffleCards = () => {
    let newCards = this.state.cards.sort(function(a, b) {
      return 0.5 - Math.random();
    });

    this.setState({
      cards: newCards
    });
  };

  afterClicked = () => {
    this.shuffleCards();
    this.loadCards();
    alert("J")
  };

  loadCards = () => {
    return (
      <div>
        {this.state.cards.map(card => {
          return (
            <Card
              key={card.name}
              src={card.image}
              className="cardimage cardshape"
              alt={card.name}
              id={card.id}
              onClick={this.afterClicked}
            />
          );
        })}
      </div>
    );
  };

  render() {
    return this.loadCards();
  }
}

export default App;
