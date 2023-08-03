import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    alert("sanjay");
  };

  return (
    <div className="App">
      <h2> Test React </h2>
      <Button onButtonClick={handleButtonClick}><span> i </span>Sanjay</Button>
    </div>
  );
}

export default App;
