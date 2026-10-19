// Topic 8: Uncontrolled Components (useRef)
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    alert("Name: " + name + "\nEmail: " + email);
    nameRef.current.value = "";
    emailRef.current.value = "";
  }

  return (
    <div>
      <h2>Registration Form (Uncontrolled)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Enter your name" required />
        <input type="email" ref={emailRef} placeholder="Enter your email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
