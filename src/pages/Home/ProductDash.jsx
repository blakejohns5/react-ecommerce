import ProductCard from "./ProductCard.jsx";

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
      <section className="product-dash col-9">
        <h1 className="product-dash__title">{ title }</h1>        
        <article className="product-dash__items">
          {filteredProducts.map((product) => <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} sale={product.sale} addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} favState={favState} favDispatch={favDispatch} />)}
        </article>
      </section>
    </>
  );
}



export default ProductDash;