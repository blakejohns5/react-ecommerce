import { Link } from 'react-router-dom'
import FavBtn from '../FavBtn/FavBtn';


const Favorites = ({ favState, favDispatch }) => {
  const currency = '€';

  return (
    <>
    <section className="d-flex flex-column ">
      <h2 className="mb-4">Your Wishlist</h2>
      <ul className="list-group dash">
        {favState.map(item => (
          <li className="list-group-item mb-2 col-12 product__card d-flex align-items-center" key={item.id}>
            <Link to={`/product/${item.id}`} className="col-7 d-flex align-items-center text-decoration-none text-dark list-style-none gap-3">
              {/* <div className="my-2 d-flex gap-2 align-items-center text-decoration-none text-dark list-style-none"> */}
                <img src={item.img} className=" col-4 cart__img " alt="pair of shoes" />
                <div className='me-2 col-8'>{item.name}</div>
              {/* </div> */}
            </Link>
            <div className='d-flex col-3 align-items-center'>
              { item.sale ? ( 
                <div className='col-2 text-danger ms-5 position-absolute end-0 me-5'>{item.sale.toFixed(2)} {currency}</div>
              ) : ( 
                <div className='col-2 ms-5 position-absolute end-0 me-5'>{item.price.toFixed(2)} {currency}</div> 
              )} 
            </div>  
            <div className='d-flex align-items-center position-absolute end-0 me-4'>
              <FavBtn key={'fav'+item.id} id={item.id} img={item.img} name={item.name} price={item.price} sale={item.sale} favState={favState} favDispatch={favDispatch}  />
            </div> 
            
          </li>
        ))}
      </ul>
    </section>
    </>
  )

}



export default Favorites;