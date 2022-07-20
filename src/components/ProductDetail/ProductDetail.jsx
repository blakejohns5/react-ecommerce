import AddBtn from "../AddBtn/AddBtn";
import FavBtn from "../FavBtn/FavBtn";

function ProductDetail (props) {
  const {img, name, price, id, sale, addToStorage, removeFromStorage, favState, favDispatch} = props;
  const currency = "€";

  return (
    <>
      <section className='h-50 col-8 d-flex justify-content-center text-center'>
        <div className="col-10 product__frame d-flex flex-column align-items-center justify-content-center position-relative">
          <div className="detail__fav-btn">
            <FavBtn key={id} id={id} name={name} price={price} img={img} sale={sale} favState={favState} favDispatch={favDispatch} />
          </div>
          <img src={img} alt="selected product" className="img-fluid img-thumbnail col-8 mb-2"></img>
          <h4><strong>{name}</strong></h4>
          <p className="fs-5">{price.toFixed(2)} {currency}</p>
        <div>
        <AddBtn key={id} id={id} name={name} price={price} img={img} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        </div>
       
        </div>
      </section>
    </>
  )
}

export default ProductDetail;
