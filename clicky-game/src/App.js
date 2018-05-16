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
    
  
  };

  render() {
    return <Card clicked={this.afterClicked} people={cards} />;
  }
}

export default App;
