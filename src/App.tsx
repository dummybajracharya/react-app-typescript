import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { FaBeer } from 'react-icons/fa';
import {AiOutlineDownload} from 'react-icons/ai';

function App() {
  const [count, setCount] = useState(0);

  const handlePrimaryButton = () => {
    alert("primary button click");
  };

  const handleSecondaryButton = () => {
    alert("secondary button click");
  };

  const handleDangerButton = () => {
    alert("danger button click");
  };

  return (
    <div className="App">
      <h2> React Button Component </h2>
      <Button color="primary" onButtonClick={handlePrimaryButton}> <FaBeer /> Primary </Button>
      <Button color="secondary" onButtonClick={handleSecondaryButton}> <AiOutlineDownload /> Secondary </Button>
      <Button color="danger" onButtonClick={handleDangerButton}> Danger </Button>
    </div>
  );
}

export default App;
