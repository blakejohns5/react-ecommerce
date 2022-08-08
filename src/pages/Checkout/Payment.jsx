

const Payment = ({ setCheckoutStage }) => {
  return (
    <>
    <main className="payment col-8">  
      <form id="billingForm" onSubmit={() => setCheckoutStage('complete')} className="payment__form">
        <div className="payment__left col">
          <h2>Billing Address:</h2>  
          <div className="row">
            <label htmlFor="firstName" className="col">First Name:</label>
            <label htmlFor="lasttName"  className="col" >Last Name:</label>
          </div>
          <div className="row">
            <input type="text" id="firstName" name="firstName" className="col "  />
            <input type="text" id="lastName" name="lastName" className="col"  />
          </div>
          <div className="row">
            <label htmlFor="emailBilling" className="col">Email:</label>
          </div>
          <div className="row">
            <input type="email" id="emailBilling" name="emailBilling" className="col "  />
          </div>
          <div className="row">
            <label htmlFor="addressBilling" className="col">Billing Address:</label>
          </div>
          <div className="row">
            <input type="text" id="addressBilling" name="emailaddressBilling" className="col"  />
          </div>
          <div className="row">
            <label htmlFor="cityBilling" className="col">City:</label>
          </div>
          <div className="row">
            <input type="text" id="cityBilling" name="cityBilling" className="col "  />
          </div>
          <div className="row">
            <label htmlFor="state"  className="col" >State:</label>
            <label htmlFor="country"  className="col-5" >Country:</label>
            <label htmlFor="PostCode"  className="col " >PostCode:</label>
          </div>
          <div className="row">
            <input type="text" id="state" name="state" className="col "  />
            <input type="text" id="country" name="country" className="col-5"  />
            <input type="text" id="postCode" name="postCode" className="col"  />
          </div> 
        </div> 

        {/* Division left right columns */}

        <div className="payment__right col">
          <h2>Payment Details:</h2>  
          <fieldset>
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
          
          <div className="row">
            <label htmlFor="nameCard" className="col">Name on Card:</label>
            <label htmlFor="cardNumber" className="col">Credit Card Number:</label>
          </div>
          <div className="row">
            <input type="text" id="nameCard" name="nameCard" className="col"  />
            <input type="number" id="cardNumber" name="cardNumber" className="col" max="16" />
          </div>
          
          <div className="row">
            <label htmlFor="expiry"  className="col">Expiration:</label>
            <label htmlFor="cvv"  className="col" >CVV:</label>
          </div>
          <div className="row">
            <input type="date" id="expiry" name="expiry" className="col"  />
            <input type="text" id="cvv" name="cvv" className="col"  />            
          </div> 
        </div>   
        
      
      
      
      </form>
      
    </main>
    <footer className="payment__footer">
    <button type="submit" form="billingForm" className="btn-checkout">Place Order</button>
    </footer>
  </>
  )

  
}


export default Payment;