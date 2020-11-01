import React, { useState, useEffect } from "react";

function Counter(props) {
  const { initCount, increments, decrements } = props;

  const [count, setCount] = useState(initCount);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <p> You clicked me {count} times</p>
      <button onClick={() => setCount(count + increments)}>
        {" "}
        Increment me
      </button>
      <button onClick={() => setCount(count - decrements)}>
        {" "}
        Decrement me
      </button>
    </div>
  );
}

export default Counter;
