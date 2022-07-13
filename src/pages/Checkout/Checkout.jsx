import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
import { useLocation } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const cart = location.state;

  return (
    <> 
     <main className='d-flex flex-column col-8 margin5 justify-content-center align-items-start gap-5'>
      <h1 className="mb-5">Welcome to Checkout</h1>
      <CheckoutTable cart={cart} />
     


        
     </main>
    </>
  )
}

export default Checkout;