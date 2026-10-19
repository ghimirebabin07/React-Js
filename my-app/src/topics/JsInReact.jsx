// Topic 3: JavaScript in JSX
function JsInReact() {
  const name = "Babin Ghimire";
  let a = 10;
  let b = 30;
  let isLoggedIn = true;

  let user = { name: "Babin", age: 20 };
  let fruits = ["Mango", "Banana", "Apple"];

  function add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h2>Welcome to {name} Learning</h2>
      <p>Sum: {a + b}</p>
      <p>{isLoggedIn ? "Logged in" : "Not logged in"}</p>
      <p>{isLoggedIn && "Welcome back!"}</p>
      <p>Result: {add(10, 20)}</p>
      <p>{user.name} is {user.age} years old</p>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

export default JsInReact;
