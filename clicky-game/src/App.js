import React from "react";
import Card from "./components/card/card.js";
import cards from "./cards.json";



const App = () => <Card
name={cards[0].name}
image={cards[0].image}
alt={cards[0].alt}
/>;

export default App;
