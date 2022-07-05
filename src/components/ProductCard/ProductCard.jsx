import AddBtn from "../AddBtn/AddBtn";

function ProductCard({ img, name, price }) {
  price = price.toFixed(2);
  let currency = '€';

  return (
    <>
    <div className="product__card bg-light py-5 px-3 border d-flex flex-column align-items-center text-center justify-content-center col-3">
      <img src={img} alt="shoes_01" className="img-fluid mb-1 img-thumbnail" />
      <div className="h-100 d-flex flex-column justify-content-start">
      <h3 className="my-2 fs-5">{name}</h3>  
      </div>      
      <div className="h-100 d-flex flex-column justify-content-end mt-2">
      <p className="fs-5">{price} {currency}</p>        
      </div>      
      <div className="h-100 d-flex flex-column justify-content-end ">
        <AddBtn />
      </div>
      
    </div>
    
    </>
  )
}

export default ProductCard;