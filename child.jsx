import React, { useState } from "react";

function Child() {
  const [name, setName] = useState("");

  //   console.log("child");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {name}</p>
    </>
  );
}

export default Child;
