import AddBtn from "../AddBtn/AddBtn";
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const price = props.price;
  // price = price.toFixed(2);
  const currency = '€';
  const {id, img, name} = props;
  
  return (
    <>
      <div className="col-4 p-2 ">
        <div className="h-100 product__card bg-light px-3 py-4 d-flex flex-column align-items-center text-center position-relative">
          <Link to={`/product/${id}`} className="text-decoration-none text-dark d-flex flex-column align-items-center text-center">
            <img src={img} alt="shoes_01" className="img-fluid mb-1" />
            <div className="h-100 d-flex flex-column justify-content-start">
            <h3 className="my-2 fs-5 text-decoration-none">{name}</h3>  
            </div>
            <div className="h-100 d-flex flex-column mt-2">
            <p className="fs-5">{price.toFixed(2)} {currency}</p>
            </div>
          </Link>          
          <div className="h-100 d-flex mt-2">
            <AddBtn key={id} {...props} 
            
             />
          </div>
        </div>
      </div>
        
    </>
  )
}


export default ProductCard;