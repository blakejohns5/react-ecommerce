
function Counter(props) {
  const { product, addToStorage, removeFromStorage } = props;
  
  return (
    <>
    <article className="counter">
      <button className="counter__add" onClick={() => addToStorage(product)}>+</button>
      <span className="fw-bold mt-1">{product.qty}</span>
      <button className="counter__remove" onClick={() => removeFromStorage(product)}>-</button>
    </article>
    </>
  )
}

export default Counter;