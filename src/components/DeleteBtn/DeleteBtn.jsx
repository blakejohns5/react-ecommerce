import React from 'react'

function DeleteBtn (props) {
  console.log(props)
  const { product} = props;
  console.log(product)

  // function confirmDelete (product) {
  //   console.log('clicking delete')
  //   console.log(product);
  //   return (
  //     <>
  //       <dialog id="deleteItem__dialog">
  //         <menu>
  //           <button id="cancel" type="reset">Cancel</button>
  //           <button type="submit">Confirm</button>
  //         </menu>
  //       </dialog>
  //     </>
      
  //   )
  // }

  return (
    <div>
      {/* setCartItems(cart.filter((item) => item.id !== product.id)); */}
      <button className="btn__remove col-2 border-0 bg-dark" onClick={() => confirmDelete(product)}>X</button>
    </div>
  )


}
export default DeleteBtn;
  
