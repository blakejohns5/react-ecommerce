import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';

function CheckoutTable({ cart, addToStorage, removeFromStorage }) {
  const currency = '€';
  console.log((cart))

  return (
    <>
      <table className="col-9 text-start me-5">
      <thead className="border-dark border-3 border-top-0 border-start-0 border-end-0">
        <tr className="fs-5 py-2">
          <th className="col-1 py-2"></th>
          <th className="col-4 ps-2">Product</th>
          <th className="col-1 py-2">Qty</th>
          <th className="col-1 py-2">Price</th>
          <th className="col-2 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem, index) => (
          <tr key={index} className="h-100 text-start fs-5">
            <td>
              <Link to={`/product/${cartItem.id}`} className="text-decoration-none w-100 h-100">
                <img className="img-fluid img-thumbnail w-100 px-1 my-3" src={cartItem.img} alt={`cart product of ${cartItem.name}`} />
              </Link>
            </td>
            <td className="ps-2">
              <Link to={`/product/${cartItem.id}`} className="text-decoration-none w-100 h-100 text-dark">
                {cartItem.name}
              </Link>
            </td>
            <td className='ps-2'>{cartItem.qty}</td>
            <td>{cartItem.price.toFixed(2)} {currency}</td>
            <td className='ps-5'><Counter product={cartItem} addToStorage={addToStorage} removeFromStorage={removeFromStorage} /></td>
          </tr>
        ))};
      </tbody>
    </table>
  </>
  )
}

export default CheckoutTable;

