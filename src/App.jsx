import "./App.css";
import { useState } from "react";

function App() {
  const [showMessage, setShow] = useState("Greeting Message");

  const handleThaiClick = () => {
    setShow("สวัสดี!");
  };

  const handleEnglishClick = () => {
    setShow("Hi!");
  };

  const handleChaineseClick = () => {
    setShow("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{showMessage}</div>
      <div className="buttons">
        <button onClick={handleThaiClick}>สวัสดี!</button>
        <button onClick={handleEnglishClick}>Hi!</button>
        <button onClick={handleChaineseClick}>你好!</button>
      </div>
    </div>
  );
}

export default App;
