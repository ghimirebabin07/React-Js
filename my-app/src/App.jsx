import User, { Profile, UserName } from "./components/User";

function App() {
  return (
    <div>
      <h1>My React Application</h1>
      <User />
      <Profile />
      <h1>{UserName}</h1>
    </div>
  );
}

export default App;
