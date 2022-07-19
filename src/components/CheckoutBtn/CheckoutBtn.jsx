import { Link } from 'react-router-dom';

function CheckoutBtn() {
  
  return (
    <>
     <Link to='/checkout' ><button className="btn__checkout col-12 fs-4 text-light fw-bold btn-md px-5 py-2 border fw-bold">Checkout</button></Link>
    </>    
  )
}

export default CheckoutBtn;