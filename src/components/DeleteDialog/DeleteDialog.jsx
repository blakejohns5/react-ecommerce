import { useContext } from 'react';
import CartContext from '../../context/CartProvider';

function DeleteDialog({ product }) {
  const { cart, setCartItems } = useContext(CartContext);

  function deleteItem (product) {
    
    setCartItems(cart.filter((item) => item.id !== product.id));
    
  }

  return (
  
    <>
      <div className="modal fade " id="deleteDialog" tabindex="-1" aria-labelledby="deleteDialogLabel" aria-hidden="true">
        <div className="modal-dialog dialog__login p-2">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteDialogLabel">You don't like these?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to remove this item from your cart?</p>
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <button type="button" className="btn__add btn px-5 py-1 fw-bold text-light me-3" onClick={() => deleteItem(product)} data-bs-dismiss="modal">Yes, I'm sure</button>
              <button type="button" className="btn__add btn px-5 py-1 fw-bold text-light me-3" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default DeleteDialog;