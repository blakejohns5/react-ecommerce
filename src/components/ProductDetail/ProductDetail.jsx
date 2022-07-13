import AddBtn from "../AddBtn/AddBtn";

function ProductDetail (props) {
  const {img, name, price, id, addToStorage, removeFromStorage} = props;
  const currency = "€";

  return (
    <>
      <section className='h-50 col-6 d-flex justify-content-center '>
        <div className="col-10 product__frame d-flex flex-column align-items-center justify-content-center">
        <img src={img} alt="selected product" className="img-fluid img-thumbnail col-8 p-2 mb-4"></img>
        <h4><strong>{name}</strong></h4>
        <p className="fs-5">{price.toFixed(2)} {currency}</p>
        <AddBtn key={id} id={id} name={name} price={price} img={img} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        </div>
       
      </section>
    </>
  )
}

export default ProductDetail;
