import { useContext } from "react";
import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
import OrderTotal from "./OrderTotal";
import AuthContext from "../../context/AuthProvider";
import CartContext from "../../context/CartProvider";
import DeleteBtn from "../../components/Delete/DeleteBtn";



const Order = ({ setCheckoutStage }) => {
  
  const { user } = useContext(AuthContext);
  const { totalCost, totalItems } = useContext(CartContext)
  
  

  if (totalItems === 0) {
    return (
      <>
      <main className='order-empty col-12'>
      <h1>Your Order</h1>
      <h2>You have no items in your cart at this time</h2>
      </main>
      </>
    )
  } else {
  return (
    <>       
      <main className='order-summary col-10'>
      <h1>Your Order</h1>
      <section className="order-summary__content col-12" >
        <div className="col-9 checkout-table__wrapper">
          <CheckoutTable />
        </div>
        <div className="col-3 order-total">
          <OrderTotal totalItems={totalItems} totalCost={totalCost} />
        </div>
      </section>

      <section className='order-summary__footer'>
      
      {user ? (          

        <button type="button" className='btn-checkout' onClick={() => setCheckoutStage('shipping')}>Continue Checkout</button>
      ) : (
        <>
        <button className='btn-checkout' onClick={() => setCheckoutStage('shipping')} >Continue as Guest</button>
        <button type="button" className='btn-checkout' data-bs-toggle="modal" data-bs-target="#loginDialog">Sign in</button> 
        </>
      )}
      </section>  
      </main>
    </>
    )
  }
}


export default Order;

