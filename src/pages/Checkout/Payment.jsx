import { Formik, Form } from 'formik';
import { actions } from 'react-table';
import { paymentSchema } from '../../helpers/formValidation';
import InputCustom from './InputCustom'
import RadioCustom from './RadioCustom'


// NOTE ON FORMIK
// this page uses formik, using formik components
// code more concise than with useFormik hook, see Shipping component for example

const Payment = ({ setCheckoutStage }) => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    setCheckoutStage('complete');
  }

  return (
    <>
    <main className="payment col-8">  
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailBilling: "",
          addressBilling: "",
          cityBilling: "",
          state: "",
          country: "",
          postCode: ""
        }}
        validationSchema={paymentSchema}
        onSubmit={onSubmit}
        >
        {(props => (
        <div className="payment__wrapper">
        <Form id="billingForm" className='payment__form col-12'>
          
          <div className="payment__left col-6">
            <h2>Billing Address:</h2>
            <div className="row">
              <div className='col'>
                <InputCustom label='First name' name='firstName' type='text' id='firstName' />
              </div>
              <div className='col'>
                <InputCustom label='Last name' name='lastName' type='text' id='lastName' />
              </div> 
            </div>
            <div className="row">
              <div className='col'>
             <InputCustom label='Email' name='emailBilling' type='text' id='emailBilling' />
             </div>
            </div>
            <div className="row">
            <div className='col'>
              <InputCustom label='Billing address' name='addressBilling' type='text' id='addressBilling' />
              </div>
            </div>
            <div className="row">
            <div className='col'>
              <InputCustom label='City' name='cityBilling' type='text' id='cityBilling' />
              </div>
            </div>
            <div className="row">
              <div className='col-4'>
                <InputCustom label='State' name='state' type='text' id='state' />                
              </div>
              <div className='col-5'>
                <InputCustom label='Country' name='country' type='text' id='country' />
              </div>
              <div className='col-3'>
                <InputCustom label='Post Code' name='postCode' type='number' id='postCode' />
              </div>
              
              
              
            </div>
          </div>

          {/* Division left right columns */}

          
          <div className="payment__right col-6">
            <h2>Payment Details:</h2>  
            <fieldset>
              <div className="form-set"> 
                <RadioCustom label='Credit' name='payMethod' type='radio' id='creditCard' />
                {/* <input type="radio" id="creditCard" name="payMethod" className="form-check-input me-2" />
                <label htmlFor="creditCard" className="form-check-label" checked>Credit Card:</label> */}
              </div>
              <div className="form-set">
                <RadioCustom label='Debit' name='payMethod' type='radio' id='debitCard' />
              </div>
              <div className="form-set">
                <RadioCustom label='PayPal' name='payMethod' type='radio' id='payPal' />           
              </div>              
            </fieldset>
         
            <div className="row">
              <div className='col'>
                <InputCustom label='Billing Name' name='nameCard' type='text' id='nameCard' />
              </div>
            </div>
            <div className="row">
              <div className='col'>
                <InputCustom label='Card Number' name='cardNumber' type='text' id='cardNumber' />
              </div>
            </div>
            <div className="row">
              <div className='col'>
                <InputCustom label='Expiration Date' name='expiry' type='date' id='expiry' />
              </div>
              <div className='col'>
                <InputCustom label='CVV' name='cvv' type='text' id='cvv' />
              </div>
            </div>
          </div>
        </Form>
        <footer className="payment__footer">
           <button type="submit" form="billingForm" className="btn-checkout">Place Order</button>
        </footer>
        </div>
        )
      )}
      </Formik>
    </main>
    </>
  )
    
      // <form id="billingForm" onSubmit={() => setCheckoutStage('complete')} className="payment__form">
     

  
}


export default Payment;