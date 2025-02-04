import AddBtn from "../../components/AddBtn/AddBtn";
import FavBtn from "../../components/Favorites/FavBtn";

function ProductDetail (props) {
  const {img, name, price, id, sale, favState, favDispatch} = props;
  const currency = "€";

  return (
    <>
      <section className='product-detail col-12'>
        <div className="col-10 product-detail__frame">
          <img src={img} alt={name} className="col-8"></img>
          <div className="product-detail__fav-btn">
            <FavBtn key={id} id={id} name={name} price={price} img={img} sale={sale} favState={favState} favDispatch={favDispatch} />
          </div>
          <h4><strong>{name}</strong></h4>
          <p>{price.toFixed(2)} {currency}</p>
          <div className="product-detail__btn">
          <AddBtn key={id} id={id} name={name} price={price} img={img} />
          </div>       
        </div>
      </section>
    </>
  )
}

export default ProductDetail;
