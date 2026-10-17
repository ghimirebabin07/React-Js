import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React!</h1>
      <p>My first React app with Vite</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default App;
