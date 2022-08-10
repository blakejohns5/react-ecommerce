import { Link } from 'react-router-dom';
import { MdLocalOffer } from 'react-icons/md';
import AddBtn from "../../components/AddBtn/AddBtn";
import FavBtn from "../../components/Favorites/FavBtn";


function ProductCard(props) {
  const price = props.price;
  const currency = '€';
  const {id, img, name, sale, favState, favDispatch, wishlistInit} = props;

  return (
    <>
      <div className="product-wrapper__outer col-lg-4 col-md-12 col-sm-12">  
        <div className='product-wrapper__inner'>
          <div className="product-card col-lg-12">
            <div className="product__fav-btn">
              <FavBtn id={id} img={img} name={name} price={price} sale={sale} favState={favState} favDispatch={favDispatch} wishlistInit={wishlistInit} />
            </div>
            <Link to={`/product/${id}`} className="product-card__link">
              <img src={img} alt="shoes_01" className="img-fluid" />
              <div className="product-card__text">
                <div className="product-card__name">{name}</div>  
                {/* Add icon and sale price if item on sale */}
                <div className="product-card__price">
                {sale ? (
                  <>
                  <div className="product-card__sale-tag faved"><MdLocalOffer /></div>
                  <div ><s>{price.toFixed(2)}</s></div>
                  <div className="product-card__sale faved">{sale} {currency}</div>
                  </>
                ) : (
                  <div className="product-card__reg">{price.toFixed(2)} {currency}</div> 
                )}
                </div>
              </div>
            </Link>
            <footer>
              <AddBtn key={id} {...props} />
            </footer>
          </div>        
        </div>
      </div>
    </>
  )
}


export default ProductCard;