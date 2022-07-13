

function AddBtn(props) {
  const { id, name, price, img, addToStorage, test } = props;  
  const product = {
    id: id,
    name: name,
    price: price,
    img: img
  }
  


  return (
    <>
      <button className="btn__add text-light font-weight-bold btn-md px-4 py-2 mb-2 border fw-bold " onClick={() => addToStorage(product)} >Add to Cart</button>
    </>
  )
}

export default AddBtn;