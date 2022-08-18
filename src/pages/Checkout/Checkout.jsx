import Breadcrumbs from './Breadcrumbs';
import Order from './Order';
import Shipping from './Shipping';
import Payment from './Payment';
import OrderComplete from './OrderComplete';

function Checkout ({ checkoutStage, setCheckoutStage }) {

  if (checkoutStage === 'order') { 
    return (
      <>
      
      <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      <Order checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }  
  if (checkoutStage === 'shipping') {
    return (
      <>
        <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
        <Shipping checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }
  if (checkoutStage === 'payment') {
    return (
      <>
        <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
        <Payment checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }
  if (checkoutStage === 'complete') {
    return (
      <>
        <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
        <OrderComplete checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }
}


export default Checkout;