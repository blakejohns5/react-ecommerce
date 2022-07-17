import AddBtn from "../AddBtn/AddBtn";

function ProductDetail (props) {
  const {img, name, price, id, addToStorage, removeFromStorage} = props;
  const currency = "€";

  return (
    <>
      <section className='h-50 col-8 d-flex justify-content-center text-center'>
        <div className="col-10 product__frame d-flex flex-column align-items-center justify-content-center">
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
