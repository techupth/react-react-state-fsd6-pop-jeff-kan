import { useState } from "react";
import "./App.css";

function App() {
  const [message,setMessage] = useState("Greeting Message")
  const switchToThai = () => {setMessage("สวัสดี!")};
  const switchToEnglish = () => {setMessage("Hi!")};
  const switchToChinese = () => {setMessage("你好!")};
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={switchToThai}>สวัสดี!</button>
        <button onClick={switchToEnglish}>Hi!</button>
        <button onClick={switchToChinese}>你好!</button>
      </div>
    </div>
  );
}

export default App;
