

import * as yup from 'yup';

const stateList = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

const countryList = ["Andorra","Argentina","Australia","Austria","Bahamas","Belarus","Belgium","Belize","Bermuda","Bolivia","Botswana","Brazil","Bulgaria","Chile","China","Colombia","Costa Rica","Croatia","Czech Republic","Denmark","Dominican Republic","Ecuador","El Salvador","Estonia","Finland","France","Germany","Greece","Guatemala","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Ireland","Israel","Italy","Jamaica","Japan","Kenya","Laos","Latvia","Lebanon","Lithuania","Luxembourg","Malaysia","Malta","Mexico","Morocco","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria","Norway","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Romania","Senegal","Serbia","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sweden","Switzerland","Taiwan","Thailand","Turkey","United Kingdom","United States","Uruguay","Venezuela","Vietnam","Zimbabwe"];

export const shippingSchema = yup.object().shape({
  firstName: yup.string().max(12).required('Required'),
  lastName: yup.string().max(15).required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  address: yup.string().min(5).required('Required'),
  city: yup.string().min(2).required('Required'),
  state: yup.string().min(2).max(2).oneOf(stateList).required('Required'),
  country: yup.string().min(4).oneOf(countryList).required('Required'),
  postCode: yup.number().min(5).max(5).required('Required')
  

})

 export const paymentSchema = yup.object().shape({
  firstName: yup.string().max(12).required('Required'),
  lastName: yup.string().max(15).required('Required'),
  emailBilling: yup.string().email('Please enter a valid email').required('Required'),
  addressBilling: yup.string().min(5).required('Required'),
  cityBilling: yup.string().min(2).required('Required'),
  state: yup.string().min(2).max(2).oneOf(stateList).required('Required'),
  country: yup.string().min(4).oneOf(countryList).required('Required'),
  postCode: yup.number().integer().min(5).max(5).required('Required'),
  payMethod: yup.string().oneOf(['creditCard', 'debitCard', 'payPal']),
  nameCard: yup.string().required('Required'),
  cardNumber: yup.number().required('Required'),
  expiry: yup.date().required('Required'),
  cvv: yup.number().required('Required')
 })