import Breadcrumbs from './Breadcrumbs';
import Order from './Order';
import Shipping from './Shipping';
import Payment from './Payment';
import OrderComplete from './OrderComplete';

function Checkout ({ addToStorage, removeFromStorage, totalItems, totalCost, checkoutStage, setCheckoutStage }) {

  if (checkoutStage === 'order') { 
    return (
      <>
      
      <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      <Order addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost}  checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }  
  if (checkoutStage === 'shipping') {
    return (
      <>
        <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
        <Shipping addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }
  if (checkoutStage === 'payment') {
    return (
      <>
        <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
        <Payment addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }
  if (checkoutStage === 'complete') {
    return (
      <>
        <Breadcrumbs checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
        <OrderComplete addToStorage={addToStorage} removeFromStorage={removeFromStorage} totalItems={totalItems} totalCost={totalCost} checkoutStage={checkoutStage} setCheckoutStage={setCheckoutStage} />
      </>
    )
  }
}


export default Checkout;