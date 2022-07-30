import { useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App(props) {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Homepage HandleChangeCart={onAddToCart}></Homepage>
    </div>
  );
}

export default App;
