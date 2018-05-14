import React from "react";
import Card from "./components/card/card.js";
import cards from "./cards.json";

const App = () => <Card people={cards}/>;

export default App;
