
function Counter(props) {
  const { product, addToStorage, removeFromStorage } = props;
  
  return (
    <>
    <article className="h-100 cart__counter d-flex gap-2 align-items-center">
      <button className="counter__btn bg-transparent border-0 counter__add fw-bold" onClick={() => addToStorage(product)}>+</button>
      <span className="fw-bold mt-1">{product.qty}</span>
      <button className="mb-2 counter__btn counter__remove bg-transparent border-0 fw-bold" onClick={() => removeFromStorage(product)}>-</button>
    </article>
    </>
  )
}

export default Counter;