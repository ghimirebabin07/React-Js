import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div>
      <h1>React onChange Event</h1>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your name"
      />
      <p>You entered: {message}</p>
      <button onClick={() => setMessage("")}>Clear</button>
    </div>
  );
}

export default App;
