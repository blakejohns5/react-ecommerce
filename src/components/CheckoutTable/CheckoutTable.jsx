import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import CartContext from '../../context/CartProvider';
import DeleteBtn from '../Delete/DeleteBtn';



function CheckoutTable() {
  const { cart } = useContext(CartContext);
  console.log('checkout table: ' + {cart})
  cart.map(item =>  console.log(item))
  const currency = '€';

  return (
    <>
    <section className='checkout-table col-10'>
      <header className='checkout-table__header col-12'>
        <div className="col-2"></div>
        <div className="col-4">Product</div>
        <div className="col-1">Qty</div>
        <div className="col-2">Price</div>
        <div className="col-2"></div>
        <div className="col-1"></div>
      </header>
      <section className='checkout-table__body'>
        {cart.map((cartItem, index) => (
          <div key={index} className="checkout-table__row ">
            <div className="checkout-table__cell">
              <Link to={`/product/${cartItem.id}`} className="checkout-table__link">
                <img src={cartItem.img} alt={`cart product of ${cartItem.name}`} className="checkout-table__img img-fluid img-thumbnail" />
              </Link>
            </div>
            <div className="checkout-table__cell col-4">
              <Link to={`/product/${cartItem.id}`} className="checkout-table__link">
                {cartItem.name}
              </Link>
            </div>
            <div className="checkout-table__cell col-1">{cartItem.qty}</div>
            <div className="checkout-table__cell col-2">{cartItem.price.toFixed(2)} {currency}</div>
            <div className="checkout-table__cell col-2"><Counter product={cartItem} /></div>
            <div className="checkout-table__cell col-1"><DeleteBtn key={'del' + index} product={cartItem} /></div>
          </div>
        ))}
      </section>
    </section>  
    
    </>
  )
}


export default CheckoutTable;

