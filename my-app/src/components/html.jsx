function HtmlDemo() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is my image:</p>
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        alt="Beautiful landscape"
        width="300"
      />
      <button onClick={() => alert("Button clicked!")}>Click Me</button>
    </div>
  );
}

export default HtmlDemo;
