import ShoppingCart from './ShoppingCart';

function CartDialog({ addToStorage, removeFromStorage, totalItems, totalCost }) {
  

  return (
  
    <>
      <div className="modal fade" id="cartDialog" tabIndex="-1" aria-labelledby="CartDialogLabel" aria-hidden="true">
        <div className="modal-dialog dialog__cart p-0">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cartDialogLabel">Shopping Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ShoppingCart addtoStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} />
            </div>
            <div className="modal-footer d-flex justify-content-center align-items-center">
              <button type="button" className="btn-cart" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default CartDialog;