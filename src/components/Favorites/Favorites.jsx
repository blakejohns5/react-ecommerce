import { Link } from 'react-router-dom'
import FavBtn from '../FavBtn/FavBtn';


const Favorites = ({ favState, favDispatch }) => {
  const currency = '€';

  return (
    <>
    <section className="d-flex flex-column ">
      
      {favState.length === 0 ? (
        <div>
        <p className='fs-4 px-5 mt-5'>You currently have no items in your wishlist.</p>  
        </div>
        
      ) : (
        
        <ul className="list-group dash ">
        {favState.map(item => (
          <li className="list-group-item mb-2 col-12 d-flex align-items-center" key={item.id}>
            <Link to={`/product/${item.id}`} className="col-7 d-flex align-items-center text-decoration-none text-dark list-style-none gap-3">
              {/* <div className="my-2 d-flex gap-2 align-items-center text-decoration-none text-dark list-style-none"> */}
                <img src={item.img} className="h-100 col-5 cart__img " alt="pair of shoes" />
                <div className='me-2 col-7'>{item.name}</div>
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
              <FavBtn key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} sale={item.sale} favState={favState} favDispatch={favDispatch}  />
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