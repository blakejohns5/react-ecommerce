import { Link } from 'react-router-dom';

function CheckoutBtn() {
  
  return (
    <>
     <Link to='/checkout' ><button className="btn-checkout">Checkout</button></Link>
    </>    
  )
}

export default CheckoutBtn;