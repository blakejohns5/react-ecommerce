import React from 'react'
import Counter from '../Counter/Counter';

function ShoppingCard(props) {
  const { id, img, name, price, cart } = props;
  const cartIsEmpty = cart.length === 0;
  

  if (cartIsEmpty) {
    return;
  } 

  if (!cartIsEmpty) {
    return (
      <section className='mt-4 col-12'>
        <div className="my-3 d-flex gap-3">
          <img src={img} className="col-4 cart__img img-thumbnail rounded-end rounded-pill" alt="pair of shoes" />
          <div className="col-8 d-flex flex-column justify-content-center">
            <div>{name}</div>
            <div className='d-flex align-items-center'>
            <div className='col-3'>{price}</div> 
            <div className="mx-2 col-5 justify-self-end mb-1"><Counter /></div>
            <button className="btn__remove col-2 border-0 bg-dark">X</button>
            </div>
              
            
          </div>
        </div>
        
        
      </section>
    )
  }
}



export default ShoppingCard