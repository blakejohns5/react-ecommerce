import ProductCard from "../ProductCard/ProductCard.jsx";

const ProductDash = ({ products, searchTerms, addToStorage, removeFromStorage, totalItems, totalCost, favState, favDispatch }) => {
  const title = 'Top-selling Sneakers';
    
  const filterResults = (products, searchTerms) => {
    if (!searchTerms) {
      return products;
    }
    return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(searchTerms);
    })
  }

  const filteredProducts = filterResults(products, searchTerms)

  return (
    <>
      <section className="col-9 me-3">
        <h1 className="fw-bold mb-5 mt-2">{ title }</h1>        
        <article className="dash d-flex flex-wrap flex-shrink flex-grow px-4">
          {filteredProducts.map((product) => <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} sale={product.sale} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} />)}
        </article>
      </section>
    </>
  );
}



export default ProductDash;