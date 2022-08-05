

const Shipping = ({ setCheckoutStage }) => {
  return (
    <>
      <main className="shipping">      
        <header>
          <h2 >Shipping Information</h2>
        </header>      
        <form id="shippingForm" className="shipping__form col-6" onSubmit={() => setCheckoutStage('payment')}>
          <div className="row">
            <label htmlFor="firstName" className="col">First Name:</label>
            <label htmlFor="lasttName"  className="col" >Last Name:</label>
          </div>
          <div className="row">
            <input type="text" id="firstName" name="firstName" className="col"  />
            <input type="text" id="lastName" name="lastName" className="col"  />
          </div>
          <div className="row">
            <label htmlFor="emailShipping" className="col">Email:</label>
          </div>
          <div className="row">
            <input type="email" id="emailShipping" name="emailShipping" className="col"  />
          </div>
          <div className="row">
            <label htmlFor="addressShipping" className="col">Shipping Address:</label>
          </div>
          <div className="row">
            <input type="text" id="addressShipping" name="emailaddressShipping" className="col"  />
          </div>

          <div className="row mt-">
            <label htmlFor="cityShipping" className="col">City:</label>
          </div>
          <div className="row">
            <input type="text" id="cityShipping" name="cityShipping" className="col"  />
          </div>
          <div className="row">
            <label htmlFor="state"  className="col" >State:</label>
            <label htmlFor="country"  className="col-5" >Country:</label>
            <label htmlFor="PostCode"  className="col " >PostCode:</label>
          </div>
          <div className="row">
            <input type="text" id="state" name="state" className="col"  />
            <input type="text" id="country" name="country" className="col-5"  />
            <input type="number" id="postCode" name="postCode" className="col"  />
          </div> 
        </form>        
      </main>
      <footer className="shipping__footer">
      <button type="submit" form="shippingForm" className='btn-checkout' >Continue to Payment</button>
      </footer>
    </>
  )
}

export default Shipping