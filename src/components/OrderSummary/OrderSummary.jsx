

function OrderSummary(props) {
  const currency = "€";
  const { totalItems, totalCost } = props;
  
  if (totalItems === 0) {
    return (
      <p className='fs-5 text-italic'>You currently have no items in your cart</p>
    )
  }
  if (totalItems > 0) {
    return (
      <>
        <div className="d-flex flex-column gap-2 ms-5 col-12" >
          <h5 className="pt-5 fw-bold mb-3">Order Summary:</h5>
            <div className="d-flex fs-5">
              <p className="me-3">Total items:</p>
              <p className="ms-3">{totalItems}</p>
            </div>
            <div className="d-flex fs-5">
              <p className="me-5">Total:</p> 
              <p className="ms-5">{totalCost.toFixed(2)} {currency}</p>
            </div>
        </div>
      </>
    )
  }
  
}


export default OrderSummary;