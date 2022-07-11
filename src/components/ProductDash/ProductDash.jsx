import ProductCard from "../ProductCard/ProductCard.jsx";
import { products } from "../../products.js";



const ProductDash = ({ cart, setCartItems, addToStorage }) => {
  const title = 'Top-selling Sneakers';
    
  return (
    <>
      <section className="col-9 mt-4">
        <h1 className="fw-bold mb-5">{ title }</h1>        
        <article className="d-flex flex-wrap flex-shrink flex-grow me-5 mr-5 px-5">
          {products.map((product) => <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} />)}
        </article>
      </section>
    </>
  );
}


export default ProductDash;