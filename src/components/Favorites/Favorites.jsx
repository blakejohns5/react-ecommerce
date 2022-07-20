import { Link } from 'react-router-dom'


const Favorites = ({ favState }) => {
  const currency = '€';

  return (
    <>
    <section className="d-flex flex-column justify-contents-center align-items-center">
      <h2 className="align-self-start">Your Wishlist</h2>
      <hr />
      <ul className="list-group">
        {favState.map(item => (
          <li className="list-group-item mb-4 product__card " key={item.id}>
            <Link to={`/product/${item.id}`} className="px-2  my-2 d-flex gap-3 align-items-center me-2 text-decoration-none text-dark list-style-none">
            <img src={item.img} className="col-4 cart__img " alt="pair of shoes" />
            {item.name}
            { item.sale ? ( 
              <div className='col-5 text-danger ms-3'>{item.sale.toFixed(2)} {currency}</div>
            ) : ( 
              <div className='col-3 ms-3'>{item.price.toFixed(2)} {currency}</div> 
            )}  
            </Link>
          </li>
        ))}
      </ul>
    </section>
    </>
  )

}



export default Favorites;