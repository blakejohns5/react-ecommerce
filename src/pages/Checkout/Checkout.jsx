// import { useState } from 'react';

// import CheckoutTable from "../../components/CheckoutTable/CheckoutTable";
// import OrderSummary from "../../components/OrderSummary/OrderSummary";
// import CartContext from '../../context/CartProvider';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Order from '../../components/Order/Order';
import Shipping from '../../components/Shipping/Shipping';
import Payment from '../../components/Payment/Payment';
import OrderComplete from '../../components/OrderComplete/OrderComplete';

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