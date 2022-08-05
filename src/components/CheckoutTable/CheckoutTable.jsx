import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import CartContext from '../../context/CartProvider';


function CheckoutTable({ addToStorage, removeFromStorage }) {
  const { cart } = useContext(CartContext);
  const currency = '€';

  return (
    <>
      
      <table className="col-12 checkout-table">
        <thead className="checkout-table__header">
          <tr className="checkout-table__header-row">
            <th className="col-1"></th>
            <th className="col-4 ms-2">Product</th>
            <th className="col-1">Qty</th>
            <th className="col-1">Price</th>
            <th className="col-2"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem, index) => (
            <tr key={index} className="checkout-table__row" >
              <td className="checkout-table__cell">
                <Link to={`/product/${cartItem.id}`} className="checkout-table__link">
                  <img className="checkout-table__img img-fluid img-thumbnail" src={cartItem.img} alt={`cart product of ${cartItem.name}`} />
                </Link>
              </td>
              <td className="checkout-table__cell">
                <Link to={`/product/${cartItem.id}`} className="checkout-table__link">
                  {cartItem.name}
                </Link>
              </td>
              <td className="checkout-table__cell">{cartItem.qty}</td>
              <td className="checkout-table__cell">{cartItem.price.toFixed(2)} {currency}</td>
              <td className="checkout-table__cell"><Counter product={cartItem} addToStorage={addToStorage} removeFromStorage={removeFromStorage} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default CheckoutTable;

