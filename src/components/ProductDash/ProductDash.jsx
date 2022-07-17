import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductDash = ({ products, addToStorage }) => {
  const title = 'Top-selling Sneakers';
  
  return (
    <>
      <section className="col-9 me-3">
        <h1 className="fw-bold mb-5">{ title }</h1>        
        <article className="dash d-flex flex-wrap flex-shrink flex-grow px-2">
          
          {products.map((product) => <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} addToStorage={addToStorage} />)}
        </article>
      </section>
    </>
  );
}


export default ProductDash;