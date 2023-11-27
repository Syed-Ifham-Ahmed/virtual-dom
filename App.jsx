import React, { useEffect, useState } from "react";
import Child from "./child";

function App() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const handle = () => {
      setAge((prev) => prev + 1);
    };

    document.addEventListener("click", handle);
    console.log("inner");

    return () => {
      document.removeEventListener("click", handle);
      console.log("cleanup");
    };
  }, [age]);

  // console.log("parent");
  return (
    <>
      <button>{age}</button>
      <br />
      <br />
      <Child />
    </>
  );
}

export default App;
