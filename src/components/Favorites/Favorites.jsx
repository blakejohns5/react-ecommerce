import { Link } from 'react-router-dom'
import FavBtn from './FavBtn';


const Favorites = ({ favState, favDispatch }) => {
  const currency = '€';

  return (
    <>
    <section className="wishlist">
      
      {favState.length === 0 ? (
        <div>
        <p className='wishlist__msg'>You currently have no items in your wishlist.</p>  
        </div>

      ) : (

        <ul className="list-group dash">
        {favState.map(item => (
          <li className="list-group-item wishlist__item col-12" key={item.id}>
            <Link to={`/product/${item.id}`} className="col-7 wishlist__link">
              <img src={item.img} className="wishlist__img col-5" alt="pair of shoes" />
              <div className='wishlist__item-name col-7'>{item.name}</div>
            </Link>
            <div className='col-5 wishlist__price'>
              { item.sale ? ( 
                <div className='col-4 wishlist__sale'>{item.sale.toFixed(2)} {currency}</div>
              ) : ( 
                <div className='col-4'>{item.price.toFixed(2)} {currency}</div> 
              )}
              <FavBtn className="col-1" key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} sale={item.sale} favState={favState} favDispatch={favDispatch}  />
            </div>
          </li>
          ))}
        </ul>
      )}
      
    </section>
    </>
  )

}



export default Favorites;