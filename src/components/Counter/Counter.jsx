import { useState, useEffect } from "react";

function Counter({ qty, cart }) {
  // running as function keeps it from running more than once
  const [count, setCount] = useState((value = qty) => {    
    return value;
  });
  
  
  function decreaseCount() {
    if (count === 0) return;
    setCount(prevCount => prevCount - 1);
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect((qty = 1) => {
    console.log(cart);
    setCount(qty)
  }, [cart])
  

  return (
    <>
    <article className="h-100 cart__counter d-flex gap-2 align-items-center">
      <button className="counter__btn bg-transparent border-0 counter__add fw-bold" onClick={increaseCount}>+</button>
      <span className="fw-bold mt-1">{count}</span>
      <button className="mb-2 counter__btn counter__remove bg-transparent border-0 fw-bold" onClick={decreaseCount}>-</button>
    </article>
    </>
  )
}

export default Counter;