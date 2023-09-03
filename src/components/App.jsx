import React, { useState } from "react";
import "../styles.css";
function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event) {
    const lasttName = event.target.value;
    setLName(lasttName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
