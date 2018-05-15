import React, { Component } from "react";

import Card from "./components/card/card.js";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards: cards
  };

  //this shuffles the object
  randomCards = () =>
    this.state.cards.sort(function(a, b) {
      return 0.5 - Math.random();
    });

  afterClicked = id => {
    alert("a" + id);
//put the map in render on this page? so that you can call it again here
  };

  render() {
    return <Card clicked={this.afterClicked} people={this.randomCards()} />;
  }
}

export default App;
