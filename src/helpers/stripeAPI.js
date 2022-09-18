

export const createCheckoutSession = async (cartItems) => {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cartItems
    }),
  };
  
  try {  
    const res = await fetch(process.env.REACT_APP_STRIPE_SERVER, options);
    const data = await res.json();
    return data;
  } catch (error ) {
    console.error(error);
    return error;
  }
}