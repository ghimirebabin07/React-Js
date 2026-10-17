import Props from "./components/props";

function App() {
  return (
    <div>
      <h1>Props in React</h1>
      <div>
        <Props name="Babin" age={21} />
        <Props name="Ram" age={22} />
        <Props name="Sita" age={20} />
      </div>
    </div>
  );
}

export default App;
