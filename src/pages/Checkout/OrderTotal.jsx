import { useContext } from 'react'
import CartContext from '../../context/CartProvider';

function OrderSummary(props) {
  const currency = "€";
  const { totalItems, totalCost } = useContext(CartContext)
  
  
    return (
      <>
        <section className="order-total col-12" >
          <h5>Order Total:</h5>
          <div className='col-12'>
            <article className='col-7'>
              <p>Total items:</p>
              <p>Total:</p>
            </article>
            <article className='col-5'>
              <p>{totalItems}</p>
              <p>{totalCost.toFixed(2)} {currency}</p>
            </article>
          </div>
        </section>
      </>
    )  
}


export default OrderSummary;