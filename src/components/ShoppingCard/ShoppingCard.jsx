import React from 'react'
import Counter from '../Counter/Counter';
import DeleteBtn from '../DeleteBtn/DeleteBtn';

function ShoppingCard(props) {
  const { id, img, name, qty, price, cart, addToStorage, removeFromStorage, setCartItems } = props;
  const product = {
    id: id,
    name: name,
    price: price,
    img: img,
    qty: qty
  }
  const cartIsEmpty = cart.length === 0;  
  const currency = '€';

  const pullCounter = (counter) => {
    return counter
  }

  if (cartIsEmpty) {
    return;
  } 

  if (!cartIsEmpty) {
    return (
      <section className='shopping__card mt-4 col-12'>
        <div className="my-3 d-flex gap-3">
          <img src={img} className="col-4 cart__img img-thumbnail rounded-end rounded-pill" alt="pair of shoes" />
          <div className="col-8 d-flex flex-column justify-content-center">
            <div>{name}</div>
            <div className='d-flex align-items-center'>
            <div className='col-4'>{price.toFixed(2)} {currency}</div> 
            <div className="mx-2 col-5 justify-self-end mb-1">
            <Counter key={id} product={product} addToStorage={addToStorage} removeFromStorage={removeFromStorage} /></div>
            <DeleteBtn key={id} product={product} setCartItems={setCartItems} cart={cart} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default ShoppingCard