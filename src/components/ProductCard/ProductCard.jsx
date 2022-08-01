import AddBtn from "../AddBtn/AddBtn";
import { Link } from 'react-router-dom';
import { MdLocalOffer } from 'react-icons/md';
import FavBtn from "../FavBtn/FavBtn";


function ProductCard(props) {
  const price = props.price;
  const currency = '€';
  const {id, img, name, sale, favState, favDispatch} = props;

  return (
    <>
      <div className="col-lg-4 col-md-12 col-sm-12 p-2 ">
        {/* extra div ensures card height with 1-3 results */}
        <div className="h-100">   
          <div className="cardtest product__card col-lg-12 pb-2 d-flex flex-column align-items-center text-center position-relative">
              <div className="product__fav-btn">
                <FavBtn id={id} img={img} name={name} price={price} sale={sale} favState={favState} favDispatch={favDispatch}  />
              </div>
              <Link to={`/product/${id}`} className=" text-decoration-none text-dark d-flex flex-column align-items-center text-center">
              <img src={img} alt="shoes_01" className="img-fluid mb-1" />
              <div className=" w-100 d-flex justify-content-between ">
                <div className=" my-2 text-decoration-none ms-1">{name}</div>  
                {/* Add icon and sale price if item on sale */}
                <div className="d-flex align-items-center me-1">
                {sale ? (
                  <>
                  <div className="blue me-2 fs-4 "><MdLocalOffer /></div>
                  <div ><s>{price.toFixed(2)}</s></div>
                  <div className="text-danger ms-2">{sale} {currency}</div>
                  </>
                ) : (
                  <div>{price.toFixed(2)} {currency}</div> 
                )}
                </div>
              </div>
              </Link>
              <div className="h-100 d-flex mt-2 ">
                <AddBtn key={id} {...props} />
              </div>
          </div>
        </div>
        
      </div>
        
    </>
  )
}


export default ProductCard;