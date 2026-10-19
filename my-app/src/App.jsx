import "./App.css";

// Import all topic components
import ComponentBasics from "./topics/ComponentBasics";
import User, { Profile, UserName } from "./topics/Exports";
import JsInReact from "./topics/JsInReact";
import HtmlInReact from "./topics/HtmlInReact";
import Counter from "./topics/UseState";
import PropsDemo from "./topics/Props";
import OnChangeDemo from "./topics/OnChange";
import UncontrolledForm from "./topics/Uncontrolled";

function App() {
  return (
    <div>
      <h1>React Learning - All Topics</h1>
      <p>Welcome to my React learning journey!</p>

      <section>
        <h2>1. Component Basics</h2>
        <ComponentBasics />
      </section>

      <section>
        <h2>2. Default & Named Exports</h2>
        <User />
        <Profile />
        <p>UserName: {UserName}</p>
      </section>

      <section>
        <h2>3. JavaScript in JSX</h2>
        <JsInReact />
      </section>

      <section>
        <h2>4. HTML in React</h2>
        <HtmlInReact />
      </section>

      <section>
        <h2>5. useState Hook</h2>
        <Counter />
      </section>

      <section>
        <h2>6. Props</h2>
        <PropsDemo name="Babin" age={21} />
        <PropsDemo name="Ram" age={22} />
      </section>

      <section>
        <h2>7. onChange Event</h2>
        <OnChangeDemo />
      </section>

      <section>
        <h2>8. Uncontrolled Components (useRef)</h2>
        <UncontrolledForm />
      </section>
    </div>
  );
}

export default App;
