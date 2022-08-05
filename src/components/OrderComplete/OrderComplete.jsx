import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartProvider';


const OrderComplete = ({ setCheckoutStage }) => {
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [count, setCount] = useState(6);

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
      <main className='order-complete'>
        <h1>Thank you for your order.</h1>
        <h2>You will receive confirmation by email soon.</h2>
        {count < 6 && (
          <p>You will be redirected to the Product Page in <strong>{count}</strong> seconds.</p>
        )}        
      </main>
    
    </>    

  )
}


export default OrderComplete;