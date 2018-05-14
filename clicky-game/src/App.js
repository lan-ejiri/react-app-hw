import React from "react";
import Card from "./components/card/card.js";
import cards from "./cards.json";

//this shuffles the object
const randomCards = cards.sort(function(a,b){return 0.5 - Math.random()});

//pass in the random array 
const App = () => <Card people={randomCards}/>

export default App;
