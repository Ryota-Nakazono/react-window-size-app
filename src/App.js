import { useState } from "react";
import "./App.css";
import WindowSize from "./components/WindowSize";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} WidndowSize Component
      </button>
      {show && <WindowSize />}
    </div>
  );
}

export default App;
