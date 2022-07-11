import React from 'react'

function DeleteBtn ({ product, setCartItems, cart }) {
  

  function deleteItem (product) {
    alert('Are you sure you want to delete?');
    setCartItems(cart.filter((item) => item.id !== product.id));
  }

  return (
    <div>      
      <button className="btn__remove col-2 border-0 bg-dark" onClick={() => deleteItem(product)}>X</button>
    </div>
  )


}
export default DeleteBtn;
  
