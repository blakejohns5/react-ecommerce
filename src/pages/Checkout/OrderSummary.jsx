

function OrderSummary(props) {
  const currency = "€";
  const { totalItems, totalCost } = props;
  
  if (totalItems === 0) {
    return (
      <>
      <div>
        <h5>You currently have no items in your cart</h5>
      </div>
      </>
      
    )
  }
  if (totalItems > 0) {
    return (
      <>
        <div className="col-12" >
          <h5>Order Summary:</h5>
          <table className="col-12">
            <tr>
              <th className="col-5">Total items:</th>
              <td className="col-7">{totalItems}</td>
            </tr>
            <tr>
              <th>Total:</th>
              <td>{totalCost.toFixed(2)} {currency}</td>
            </tr>
          </table>
        </div>
      </>
    )
  }
  
}


export default OrderSummary;