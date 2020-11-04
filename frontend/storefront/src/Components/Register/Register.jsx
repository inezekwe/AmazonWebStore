import Axios from "axios";
import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      Axios.post("./register")
      
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Register