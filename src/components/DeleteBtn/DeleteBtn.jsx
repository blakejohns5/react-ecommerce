import React from 'react'
import DeleteDialog from '../DeleteDialog/DeleteDialog'

function DeleteBtn ({ id, product, setCartItems, cart }) {
  

  // function deleteItem (product) {
  //   alert('Are you sure you want to delete?');
  //   setCartItems(cart.filter((item) => item.id !== product.id));
  // }

  return (
    <>
      <div>      
        <button className="btn__remove col-2 border-0 bg-dark" type="button" data-bs-toggle="modal" data-bs-target="#deleteDialog">X</button>
      </div>
      {/* Delete modal */}
      <DeleteDialog key={id} product={product} setCartItems={setCartItems} cart={cart} />
    </>
  )


}
export default DeleteBtn;
  
