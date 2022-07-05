import ProductCard from "../ProductCard/ProductCard.jsx";
import { products } from "../../products.js";



const ProductDash = () => {
  const title = 'Retro sneakers';
  
  return (
    <>
      <section className="col-9">
        <h1>{ title }</h1>
        
        <article className="d-flex flex-wrap gap-4">
          {products.map((product) => <ProductCard key={product.id} img={product.img} name={product.name} price={product.price}/>)}
        </article>
      </section>
      
      
    </>
  );
}


export default ProductDash;