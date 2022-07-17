import { useContext } from 'react';
import Counter from '../Counter/Counter';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import CartContext from '../../context/CartProvider';

function ShoppingCard(props) {
  const { cart  } = useContext(CartContext);
  const { id, img, name, qty, price, addToStorage, removeFromStorage } = props;
  const product = {
    id: id,
    name: name,
    price: price,
    img: img,
    qty: qty
  }
  const cartIsEmpty = cart.length === 0;  
  const currency = '€';

  if (cartIsEmpty) {
    return;
  } 

  if (!cartIsEmpty) {
    return (
      <section className='shopping__card mt-4 col-12'>
        <div className="my-3 d-flex gap-3">
          <img src={img} className="col-4 cart__img rounded-end rounded-pill" alt="pair of shoes" />
          <div className="col-8 d-flex flex-column justify-content-center">
            <div>{name}</div>
            <div className='d-flex align-items-center'>
            <div className='col-4'>{price.toFixed(2)} {currency}</div> 
            <div className="mx-2 col-5 justify-self-end mb-1">
            <Counter key={id} product={product} addToStorage={addToStorage} removeFromStorage={removeFromStorage} /></div>
            <DeleteBtn key={id} product={product}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default ShoppingCard