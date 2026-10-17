import { useState } from "react";

export function Bio() {
  return <p>This is my bio.</p>;
}

function StateDemo() {
  const [name, setName] = useState("Babin");
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={() => setName("Babin Hi")}>Change Name</button>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Bio />}
    </div>
  );
}

export default StateDemo;
