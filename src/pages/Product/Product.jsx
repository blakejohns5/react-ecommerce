
import { useParams } from 'react-router-dom';

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';
import ProductDetail from '../../components/ProductDetail/ProductDetail';


function Product({ products, addToStorage, removeFromStorage, totalCost, totalItems, favState, favDispatch }) {
  const { id } = useParams();  
  const product = products.find((item) => parseInt(item.id) === parseInt(id));
    
  return (
    <>
      <main className='product-page col-10'>
        <ProductDetail key={product.id} img={product.img} name={product.name} price={product.price} sale={product.sale} id={product.id} addToStorage={addToStorage} removeFromStorage={removeFromStorage} favState={favState} favDispatch={favDispatch} />
        <div className='product-page__cart col-10'>
        <ShoppingCart addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalCost={totalCost} totalItems={totalItems} />
        </div>
      </main>
    </>
  )
}

export default Product;

