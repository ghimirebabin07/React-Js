function JavascriptDemo() {
  const name = "Babin Ghimire";
  let a = 10;
  let b = 30;
  let isLoggedIn = true;

  let user = {
    name: "Babin Ghimire",
    age: 20,
  };

  let fruits = ["Mango", "Banana", "Apple", "Grapes"];

  function add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1>Welcome to {name} Learning</h1>
      <h2>Sum of a + b: {a + b}</h2>
      <p>{isLoggedIn ? "You are logged in" : "You are not logged in"}</p>
      <p>{isLoggedIn && "Welcome back!"}</p>
      <p>Result: {add(10, 20)}</p>
      <p>
        {user.name} is {user.age} years old
      </p>
      <p>{fruits[0]} is my favorite fruit</p>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

export default JavascriptDemo;
