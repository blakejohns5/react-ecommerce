import { useContext } from 'react';
import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CartContext from '../../context/CartProvider';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

function Checkout({ addToStorage, removeFromStorage, totalItems, totalCost }) {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>  
      
           
      <main className='d-flex vh-100 flex-column col-8 pt-5 mt-5 align-items-center gap-5'>
      <h1 className="mb-5 text-info fw-bold">Welcome to Checkout</h1>
      <h2 className="mb-5">You currently have no items in your shopping cart</h2>
      </main>
      </>
    )
  } else {
    return (
      <> 
      <Breadcrumbs />
       <main className='d-flex vh-100 flex-column col-10 justify-content-start mt-5 pt-2 align-items-start'>
       <h1 className="mb-3 text-info fw-bold">Welcome to Checkout</h1>
        <section className="d-flex opaque-bg rounded-pill">
          <div className="d-flex">
            <CheckoutTable addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
            <OrderSummary totalItems={totalItems} totalCost={totalCost} />
          </div>
        </section>
  
       </main>
      </>
    )
  }

  
}

export default Checkout;