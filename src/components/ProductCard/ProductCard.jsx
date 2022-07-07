import AddBtn from "../AddBtn/AddBtn";

function ProductCard(props) {
  let price = props.price;
  price = price.toFixed(2);
  const currency = '€';
  const {id, img, name, cart, setCartItems} = props;
  
  return (
    <>
      <div className="col-4 p-2 ">
        <div className="h-100 product__card bg-light px-3 py-4 border d-flex flex-column align-items-center text-center justify-content-center ">
          <img src={img} alt="shoes_01" className="img-fluid mb-1 img-thumbnail" />
          <div className="h-100 d-flex flex-column justify-content-start">
          <h3 className="my-2 fs-5">{name}</h3>  
          </div>
          <div className="h-100 d-flex flex-column justify-self-end mt-2">
          <p className="fs-5">{price} {currency}</p>
          </div>
          <div className="h-100 d-flex flex-column justify-self-end mt-2">
            <AddBtn key={id} id={id} img={img} name={name} price={price} cart={cart} setCartItems={setCartItems}         
             />
          </div>
        </div>
      </div>
        
    </>
  )
}


export default ProductCard;