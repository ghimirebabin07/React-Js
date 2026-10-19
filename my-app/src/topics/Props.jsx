// Topic 6: Props
function PropsDemo(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default PropsDemo;
