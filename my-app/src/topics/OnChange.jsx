// Topic 7: onChange Event
import { useState } from "react";

function OnChangeDemo() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>onChange Event</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />
      <p>You entered: {message}</p>
      <button onClick={() => setMessage("")}>Clear</button>
    </div>
  );
}

export default OnChangeDemo;
