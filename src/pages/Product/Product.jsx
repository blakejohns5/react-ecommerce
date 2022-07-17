
import { useParams } from 'react-router-dom';

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';
import ProductDetail from '../../components/ProductDetail/ProductDetail';


function Product({ products, addToStorage, removeFromStorage, totalCost, totalItems }) {
  const { id } = useParams();  
  const product = products.find((item) => parseInt(item.id) === parseInt(id));
    
  return (
    <>
      <main className='product__main vh-100 col-10 d-flex margin5'>
        <ProductDetail img={product.img} name={product.name} price={product.price} id={product.id} addToStorage={addToStorage} removeFromStorage={removeFromStorage} />
        <div className='product__cart col-10 px-3'>
        <ShoppingCart addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalCost={totalCost} totalItems={totalItems} />
        </div>
      </main>
    </>
  )
}

export default Product;

