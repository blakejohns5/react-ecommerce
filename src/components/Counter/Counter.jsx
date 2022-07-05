import { useState } from "react";

function Counter() {

  const [count, setCount] = useState((value = 0) => {
    // running as function keeps it from running more than once
    return value;
  });
  
  function decreaseCount() {
    if (count > 0) setCount(prevCount => prevCount - 1);
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
    <article className="d-flex gap-4 align-items-center">
          <button className="btn btn-danger" onClick={decreaseCount}>-</button>
          <span className="fw-bold fs-5"> {count} </span>
          <button className="btn btn-success" onClick={increaseCount}>+</button>
        </article>
    </>
    
  )
}

export default Counter;