import './css/App.css';
import NavBar from './components/NavBar/NavBar';
import ProductDash from './components/ProductDash/ProductDash';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';


function App () {
  return (
    <>
    <NavBar />
    <main className='d-flex mt-5'>
      <ProductDash />
      <ShoppingCart />
    </main>
    </>
  )
}



export default App;




