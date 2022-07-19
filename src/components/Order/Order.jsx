import { useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartProvider";
import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import AuthContext from "../../context/AuthProvider";


const Order = ({ addToStorage, removeFromStorage, totalCost, totalItems, setCheckoutStage }) => {
  const { cart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  
  
  if (cart.length === 0) {
    return (
      <>             
        <main className='d-flex flex-column pt-5 mt-5 align-items-center gap-5'>
          <h1 className="mb-2 text-info fw-bold">Your Order</h1>
          <h2 className="mb-5">You currently have no items in your shopping cart</h2>
          <div>
            <Link to="/" ><button type="button" className='btn__add shadow text-light font-weight-bold px-5 py-4 fw-bold fs-4'>Return to Catalog</button></Link>
          </div>
        </main>
        
        
        
      </>
    )
  } else {
    return (
      <>       
       <main className='d-flex vh-100 flex-column col-10 justify-content-start mt-5 pt-2 align-items-start'>
       <h1 className="mb-3 text-info fw-bold">Your Order</h1>
        <section className="d-flex opaque-bg rounded-pill">
          <div className="d-flex">
            <CheckoutTable addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
            <OrderSummary totalItems={totalItems} totalCost={totalCost} />
          </div>
        </section>
        <section className='w-100 d-flex justify-content-center align-items-center gap-5'>
        
        {Object.keys(auth).length > 0 ? (          

          <button type="button" className='btn__add shadow text-light font-weight-bold px-4 py-2 mb-2 fw-bold fs-5' onClick={() => setCheckoutStage('shipping')}>Continue Checkout</button>
        ) : (
          <>
          <button className='btn__add shadow text-light font-weight-bold px-4 py-2 mb-2 fw-bold fs-5 me-5' onClick={() => setCheckoutStage('shipping')} >Continue as Guest</button>
          <button type="button" className='btn__add shadow text-light font-weight-bold px-4 py-2 mb-2 fw-bold fs-5' data-bs-toggle="modal" data-bs-target="#loginDialog">Sign in</button> 
          </>
        )}
        </section>  
       </main>
      </>
    )
  }
}


export default Order;

