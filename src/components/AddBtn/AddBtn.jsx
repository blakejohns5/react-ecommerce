

function AddBtn(props) {
  const { id, name, price, img, addToStorage } = props;  
  const product = {
    id: id,
    name: name,
    price: price,
    img: img
  }
  


  return (
    <>
      <button className="btn__add text-light font-weight-bold px-4 py-2 mb-2 fw-bold" onClick={() => addToStorage(product)} >Add to Cart</button>
    </>
  )
}

export default AddBtn;