import CartDialog from "../ShoppingCart/CartDialog";

function AddBtn(props) {
  const { id, name, price, img, sale, addToStorage, removeFromStorage, totalItems, totalCost } = props;  
  const product = { id: id, name: name, price: price, img: img, sale: sale }

  return (
    <>
      <button className="btn-cart" type="button" data-bs-toggle="modal" data-bs-target="#cartDialog" onClick={() => addToStorage(product)} >Add to Cart</button>
      {/* Shopping Cart Dialog  */}
      <CartDialog addtoStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} />
    </>
  )
}

export default AddBtn;


