import { useFormik } from 'formik'
import { shippingSchema } from '../../helpers/formValidation';

// NOTE ON FORMIK
// this page uses formik, using the useFormik hook for react.
// code a bit longer than other method, using formik components
// see Payment component for example

const Shipping = ({ setCheckoutStage }) => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve), 2000);
    actions.resetForm();
    setCheckoutStage('payment');
  }
  // useFormik hook returns form values, state values, and helper methods
  // can declare formik variable, but easier here to destructure than repeat formik.values, e.g.
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '', 
      country: '',
      postCode: '',
    },
    validationSchema: shippingSchema,
    onSubmit,
  })
  
  return (
    <>
      <main className="shipping">      
        <header>
          <h2 >Shipping Information</h2>
        </header>      
        {/* <form id="shippingForm" className="shipping__form col-6" onSubmit={() => setCheckoutStage('payment')}> */}
        <form id="shippingForm" className='shipping__form col-4' onSubmit={handleSubmit}>
          <div className="shipping__row col-12">
            <label htmlFor="firstName" className="col">First Name:</label>
            <label htmlFor="lasttName"  className="col" >Last Name:</label>
          </div>
          <div className="shipping__row">
            {/* use state values in inputs */}
            <div className='d-flex flex-column col'>
            <input type="text" id="firstName" name="firstName" className={errors.firstName && touched.firstName ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
            {errors.firstName && touched.firstName && <p className="input-error__msg col">{errors.firstName}</p> }
            </div>
            <div className='d-flex flex-column col'>
            <input type="text" id="lastName" name="lastName" className={errors.lastName && touched.lastName ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.lastName}  />
            {errors.lastName && touched.lastName && <p className="input-error__msg col">{errors.lastName}</p> }
            </div>
          </div>
          <div className="shipping__row">
            <label htmlFor="email" className="col">Email:</label>
          </div>
          <div className="d-flex flex-column col-12">
            <input type="email" id="emailShipping" name="email" className={errors.email && touched.email ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.email}  />
            {errors.email && touched.email && <p className="input-error__msg">{errors.email}</p> }
          </div>
          <div className="d-flex flex-column col-12">
            <label htmlFor="address" className="col">Shipping Address:</label>
        
            <input type="text" id="addressShipping" name="address" className={errors.address && touched.address ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.address} />
            {errors.address && touched.address && <p className="input-error__msg">{errors.address}</p> }
          </div>

          <div className="d-flex flex-column col-12 ">
            <label htmlFor="city" className="col">City:</label>
          
            <input type="text" id="cityShipping" name="city" className={errors.city && touched.city ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.city} />
            {errors.city && touched.city && <p className="input-error__msg">{errors.city}</p> }
          </div>
          <div className="shipping__row">
            <label htmlFor="state"  className="col" >State:</label>
            <label htmlFor="country"  className="col"  >Country:</label>
            <label htmlFor="PostCode"  className="col ">PostCode:</label>
          </div>
          <div className="shipping__row">
            <div className='d-flex flex-column col'>
            <input type="text" id="stateShipping" name="state" className={errors.state && touched.state ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.state} />
            {errors.state && touched.state && <p className="input-error__msg col">{errors.state}</p> }
            </div>
            <div className='d-flex flex-column col'>
            <input type="text" id="countryShipping" name="country" className={errors.country && touched.country ? "input-error form-control col" : "form-control col" } onChange={handleChange} onBlur={handleBlur} value={values.country} />
            {errors.country && touched.country && <p className="input-error__msg col">{errors.country}</p> }
            </div>
            <div className='d-flex flex-column col'>
            <input type="number" id="postCodeShipping" name="postCode" className={errors.postCode && touched.postCode ? "input-error form-control col" : "form-control col" }  onChange={handleChange} onBlur={handleBlur} value={values.postCode} />
            {errors.postCode && touched.postCode && <p className="input-error__msg col">{errors.postCode}</p> }
            </div>
          </div> 
        </form>        
      </main>
      <footer className="shipping__footer">
      <button type="submit" disabled={isSubmitting} form="shippingForm" className='btn-checkout' >Continue to Payment</button>
      </footer>
    </>
  )
}

export default Shipping