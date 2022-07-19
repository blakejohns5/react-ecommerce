import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartProvider';


const OrderComplete = ({ setCheckoutStage }) => {
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    } else {
      setCartItems([]);
      setCheckoutStage('order');
      navigate('/');
    }
  });


  
  
  return (
    <>
      <main className='d-flex flex-column pt-5 mt-5 align-items-center gap-5'>
        <h1 className="text-info fw-bold">Thank you for your order.</h1>
        <h2 className="mb-5">You will receive confirmation by email soon.</h2>
        <p className='mt-5 fs-3'>You will be redirected to the Product Page in <strong>{count}</strong> seconds.</p>
      </main>
    
    </>    

  )
}


export default OrderComplete;