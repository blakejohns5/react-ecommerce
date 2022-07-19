import AddBtn from "../AddBtn/AddBtn";
import { Link } from 'react-router-dom';
import { MdLocalOffer } from 'react-icons/md';
import FavoritesBtn from "../FavoritesBtn/FavoritesBtn";


function ProductCard(props) {
  const price = props.price;
  const currency = '€';
  const {id, img, name, sale} = props;

   
  return (
    <>
      <div className="col-4 p-2 ">
        <div className="h-100 product__card bg-light px-3 py-4 d-flex flex-column align-items-center text-center position-relative">
            <div className="product__fav-btn">
              <FavoritesBtn />
            </div>
            <Link to={`/product/${id}`} className="text-decoration-none text-dark d-flex flex-column align-items-center text-center">
            <img src={img} alt="shoes_01" className="img-fluid mb-1" />
            <div className="h-100 d-flex flex-column justify-content-start">
            <h3 className="my-2 fs-5 text-decoration-none">{name}</h3>  
            </div>
            <div className="h-100 d-flex flex-column mt-2">
            {/* Add icon and sale price if item on sale */}
            {sale ? (
              <div className="d-flex align-items-center">
                <div className="blue me-4 fs-2 "><MdLocalOffer /></div>
                <div className="fs-5"><s >{price.toFixed(2)}</s></div>                
                <div className="text-danger ms-3 fs-5">{sale} {currency}</div>
              
              </div>
            ) : (
              <p className="fs-5">{price.toFixed(2)} {currency}</p>  
            )}
            
            </div>
          </Link>          
          <div className="h-100 d-flex mt-2">
            <AddBtn key={id} {...props} />
          </div>
        </div>
      </div>
        
    </>
  )
}


export default ProductCard;