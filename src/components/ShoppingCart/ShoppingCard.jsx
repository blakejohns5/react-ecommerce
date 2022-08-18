import { useContext } from 'react';
import CartContext from '../../context/CartProvider';

function ShoppingCard(props) {
  const { cart } = useContext(CartContext);
  const { id, img, name, qty, price, sale } = props;
  const product = {
    id: id,
    name: name,
    price: price,
    img: img,
    qty: qty,
    sale: sale
  }
  const cartIsEmpty = cart.length === 0;  
  const currency = '€';

  if (cartIsEmpty) {
    return;
  } 

  if (!cartIsEmpty) {
    return (
      <section className='cart-contents'>
        <div className="shopping-card">
          <img src={img} className="col-4 shopping-card__img" alt="pair of shoes" />
          <div className="col-8 shopping-card__right">
            <div className='col-8'>{name}</div>
            <div className='shopping-card__details col-4'>
              { sale ? ( 
                <div className='shopping-card__price-sale col-12'>{sale.toFixed(2)}{currency}</div>
              ) : ( 
                <div className='shopping-card__price'>{price.toFixed(2)}{currency}</div> 
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default ShoppingCard