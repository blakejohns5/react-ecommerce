import ProductCard from "../ProductCard/ProductCard.jsx";
// import { products } from "../../products.js";




const ProductDash = ({ products, cart, setCartItems, addToStorage }) => {
  const title = 'Top-selling Sneakers';
  console.log(products)


  return (
    <>
      <section className="col-9">
        <h1 className="fw-bold mb-5">{ title }</h1>        
        <article className="d-flex flex-wrap flex-shrink flex-grow me-2 px-5">
          
          {products.map((product) => <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} cart={cart} setCartItems={setCartItems} addToStorage={addToStorage} />)}
        </article>
      </section>
    </>
  );
}


export default ProductDash;