import CartContext from '../../context/CartProvider';
import ShoppingCart from './ShoppingCart';

function CartDialog() {
  

  return (
  
    <>
      <div className="modal slide-in-right" id="cartDialog" tabIndex="20" aria-labelledby="CartDialogLabel" aria-hidden="true">
        <div className="modal-dialog cart-dialog">
          <div className="modal-content cart-dialog__content">
            <div className="modal-header cart-dialog__header">
              <h5 className="modal-title cart-dialog__title" id="cartDialogLabel">Item added to your cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body col-12">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default CartDialog;