import { useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartProvider";
import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
import OrderSummary from "./OrderSummary";
import AuthContext from "../../context/AuthProvider";


const Order = ({ addToStorage, removeFromStorage, totalCost, totalItems, setCheckoutStage }) => {
  const { cart } = useContext(CartContext);
  const { loggedIn, user } = useContext(AuthContext);
  
  
  if (user) {
    return (
      <>             
        <main className='order-empty'>
          <h1>Your Order</h1>
          <h2>You currently have no items in your shopping cart</h2>
          <div>
            <Link to="/" ><button type="button" className='btn-checkout'>Return to Catalog</button></Link>
          </div>
        </main>
      </>
    )
  } else {
    return (
      <>       
       <main className='order-summary col-10'>
       <h1>Your Order</h1>
        <section className="order-summary__bg ">
          <div className="order-summary__content col-10">
            <div className="col-9">
              <CheckoutTable addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
            </div>
            <div className="col-3 order-total">
              <OrderSummary totalItems={totalItems} totalCost={totalCost} />
            </div>            
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

