

const Shipping = ({ setCheckoutStage }) => {
  return (
    <>
      <main className="d-flex flex-column align-items-center justify-content-center">      
        <header className="mt-3 ms-n5">
          <h2 >Shipping Information</h2>
        </header>      
        <form id="shippingForm" className="col-6 mt-4" onSubmit={() => setCheckoutStage('payment')}>
          <div className="row gap-3">
            <label htmlFor="firstName" className="col">First Name:</label>
            <label htmlFor="lasttName"  className="col" >Last Name:</label>
          </div>
          <div className="row  gap-3">
            <input type="text" id="firstName" name="firstName" className="col mt-2 p-1 "  />
            <input type="text" id="lastName" name="lastName" className="col mt-2 p-1"  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="emailShipping" className="col">Email:</label>
          </div>
          <div className="row  gap-3">
            <input type="email" id="emailShipping" name="emailShipping" className="col mt-2 p-1 "  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="addressShipping" className="col">Shipping Address:</label>
          </div>
          <div className="row">
            <input type="text" id="addressShipping" name="emailaddressShipping" className="col mt-2 p-1 "  />
          </div>

          <div className="row mt-4  gap-3">
            <label htmlFor="cityShipping" className="col">City:</label>
          </div>
          <div className="row">
            <input type="text" id="cityShipping" name="cityShipping" className="col mt-2 p-1 "  />
          </div>
          <div className="row mt-4  gap-3">
            <label htmlFor="state"  className="col" >State:</label>
            <label htmlFor="country"  className="col-5" >Country:</label>
            <label htmlFor="PostCode"  className="col " >PostCode:</label>
          </div>
          <div className="row  gap-3">
            <input type="text" id="state" name="state" className="col mt-2 p-1 "  />
            <input type="text" id="country" name="country" className="col-5 mt-2 p-1"  />
            <input type="number" id="postCode" name="postCode" className="col mt-2 p-1"  />
          </div> 
        </form>        
      </main>
      <footer className="d-flex justify-content-center">
      <button type="submit" form="shippingForm" className='btn__add shadow text-light fw-bold px-4 py-2 fs-5' >Continue to Payment</button>
      </footer>
    </>
  )
}

export default Shipping