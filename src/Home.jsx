import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useContextApi } from "./Context";

const Home = () => {
  const [count, setCount] = useState(0);
  const { state, updateState } = useContextApi();

  useEffect(() => {
    console.log("Component mounted or updated");
  }, [count]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const doubledCount = useMemo(() => count * 2, [count]);

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={increment}>Increment</button>
      <p>Context Value: {state}</p>
      <button onClick={() => updateState("New Context Value")}>
        Update Context
      </button>
    </div>
  );
};

export default Home;
