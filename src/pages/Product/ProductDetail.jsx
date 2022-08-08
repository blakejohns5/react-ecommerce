import AddBtn from "../../components/AddBtn/AddBtn";
import FavBtn from "../../components/Favorites/FavBtn";

function ProductDetail (props) {
  const {img, name, price, id, sale, addToStorage, removeFromStorage, favState, favDispatch} = props;
  const currency = "€";

  return (
    <>
      <section className='product-detail col-8'>
        <div className="col-10 product-detail__frame">
          <img src={img} alt={name} className="col-8"></img>
          <div className="detail__fav-btn">
            <FavBtn key={id} id={id} name={name} price={price} img={img} sale={sale} favState={favState} favDispatch={favDispatch} />
          </div>
          <h4><strong>{name}</strong></h4>
          <p>{price.toFixed(2)} {currency}</p>
          <div>
          <AddBtn key={id} id={id} name={name} price={price} img={img} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
          </div>
       
        </div>
      </section>
    </>
  )
}

export default ProductDetail;
