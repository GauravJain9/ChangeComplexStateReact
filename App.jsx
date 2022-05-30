import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleForm(event) {
    event.preventDefault();
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email
        };
      } else if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleForm}>
        <input
          onChange={handleInput}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleInput}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleInput}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
