
import { useParams } from 'react-router-dom';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart.jsx';
import ProductDetail from './ProductDetail';


function Product({ products, favState, favDispatch }) {
  const { id } = useParams();  
  const product = products.find((item) => parseInt(item.id) === parseInt(id));
    
  return (
    <>
      <main className='product-page col-10'>
        <div className="col-9">
        <ProductDetail key={product.id} img={product.img} name={product.name} price={product.price} sale={product.sale} id={product.id} favState={favState} favDispatch={favDispatch} />
        </div>
        <div className='product-page__cart col-3'>
        <ShoppingCart />
        </div>
      </main>
    </>
  )
}

export default Product;

