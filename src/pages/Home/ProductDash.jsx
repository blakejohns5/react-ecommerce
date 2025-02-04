import ProductCard from "./ProductCard.jsx";
import { FAV_ACTIONS } from "../../helpers/favReducer.js";
import { useEffect } from "react";


const ProductDash = ({ products, searchTerms, favState, favDispatch, wishlistInit }) => {
  

  // set fav status for items when dispatch or wishlistInit change
  useEffect(() => {
    wishlistInit && wishlistInit.map((item) => {  
      return favDispatch({ 
        type: FAV_ACTIONS.ADD, 
        payload: item
      })
    })
  }, [favDispatch, wishlistInit])

    
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
      <section className="product-dash col-12">
        {/* <h1 className="product-dash__title">{ title }</h1>         */}
        <article className="product-dash__items">
          {filteredProducts.map((product) => <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} sale={product.sale} favState={favState} favDispatch={favDispatch} wishlistInit={wishlistInit} />)}
        </article>
      </section>
      
    </>
  );
}



export default ProductDash;