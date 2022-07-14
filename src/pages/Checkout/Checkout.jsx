import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
// import { useLocation } from 'react-router-dom';
import OrderSummary from "../../components/OrderSummary/OrderSummary";

function Checkout({ cart, addToStorage, removeFromStorage, totalItems, totalCost }) {

  if (cart.length === 0) {
    return (
      <>  
    <main className='d-flex vh-100 flex-column col-8 justify-content-center align-items-start gap-5'>
    <h1 className="mb-5 text-info fw-bold">Welcome to Checkout</h1>
    <h2 className="mb-5">You currently have no items in your shopping cart</h2>
    </main>
    </>
    )
  } else {
    return (
      <> 
       <main className='d-flex vh-100 flex-column col-10 justify-content-center align-items-start gap-5'>
       <h1 className="mb-5 text-info fw-bold">Welcome to Checkout</h1>
        <section className="d-flex">
          <CheckoutTable cart={cart} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
          <OrderSummary cart={cart} totalItems={totalItems} totalCost={totalCost} set/>
        </section>
  
       </main>
      </>
    )
  }

  
}

export default Checkout;