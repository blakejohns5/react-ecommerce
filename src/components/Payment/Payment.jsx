

const Payment = ({ setCheckoutStage }) => {
  return (
    <>
    <main className="col-8 m-auto mt-5 pt-2">  
      <form id="billingForm" onSubmit={() => setCheckoutStage('complete')} className="d-flex gap-5">
        <div className="left__column d-flex flex-column col px-5">
          <h2 className="align-self-start mb-4 fs-3">Billing Address:</h2>  
          <div className="row gap-3">
            <label htmlFor="firstName" className="col">First Name:</label>
            <label htmlFor="lasttName"  className="col" >Last Name:</label>
          </div>
          <div className="row  gap-3">
            <input type="text" id="firstName" name="firstName" className="col mt-2 p-1 "  />
            <input type="text" id="lastName" name="lastName" className="col mt-2 p-1"  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="emailBilling" className="col">Email:</label>
          </div>
          <div className="row  gap-3">
            <input type="email" id="emailBilling" name="emailBilling" className="col mt-2 p-1 "  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="addressBilling" className="col">Billing Address:</label>
          </div>
          <div className="row">
            <input type="text" id="addressBilling" name="emailaddressBilling" className="col mt-2 p-1 "  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="cityBilling" className="col">City:</label>
          </div>
          <div className="row">
            <input type="text" id="cityBilling" name="cityBilling" className="col mt-2 p-1 "  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="state"  className="col" >State:</label>
            <label htmlFor="country"  className="col-5" >Country:</label>
            <label htmlFor="PostCode"  className="col " >PostCode:</label>
          </div>
          <div className="row  gap-3">
            <input type="text" id="state" name="state" className="col mt-2 p-1 "  />
            <input type="text" id="country" name="country" className="col-5 mt-2 p-1"  />
            <input type="text" id="postCode" name="postCode" className="col mt-2 p-1"  />
          </div> 
        </div> 

        {/* Division left right columns */}

        <div className="right__column d-flex flex-column col">
          <h2 className="align-self-start mb-4 fs-3">Payment Details:</h2>  
          <fieldset className="d-flex gap-5 mb-4">
            <div className="form-set"> 
              <input type="radio" id="creditCard" name="payMethod" className="form-check-input me-2" />
              <label htmlFor="creditCard" className="form-check-label" checked>Credit Card:</label>
            </div>
            <div className="form-set">
              <input type="radio" id="debitCard" name="payMethod" className="form-check-input me-2" />
              <label htmlFor="debitCard" className="form-check-label" >Debit Card:</label>
            </div>
            <div className="form-set">
              <input type="radio" id="payPal" name="payMethod" className="form-check-input me-2" />
              <label htmlFor="payPal" className="form-check-label">PayPal:</label>
            </div>              
          </fieldset>
          
          <div className="row gap-3">
            <label htmlFor="nameCard" className="col">Name on Card:</label>
            <label htmlFor="cardNumber" className="col">Credit Card Number:</label>
          </div>
          <div className="row gap-3">
            <input type="text" id="nameCard" name="nameCard" className="col mt-2 p-1 "  />
            <input type="number" id="cardNumber" name="cardNumber" className="col mt-2 p-1" max="16" />
          </div>
          
          <div className="row mt-4  gap-3">
            <label htmlFor="expiry"  className="col">Expiration:</label>
            <label htmlFor="cvv"  className="col" >CVV:</label>
          </div>
          <div className="row  gap-3">
            <input type="date" id="expiry" name="expiry" className="col mt-2 p-1 "  />
            <input type="text" id="cvv" name="cvv" className="col mt-2 p-1"  />            
          </div> 
        </div>   
        
      
      
      
      </form>
      
    </main>
    <footer className="d-flex justify-content-center mt-5">
    <button type="submit" form="billingForm" className='btn__add shadow text-light fw-bold px-5 py-3 fs-5'>Place Order</button>
    </footer>
  </>
  )

  
}


export default Payment;