import { createCheckoutSession } from "../../helpers/stripeAPI"
import { useContext, useState } from 'react';
import CartContext from "../../context/CartProvider";

function TestBtn() {
  const { cart } = useContext(CartContext)
  const [ response, setResponse ] = useState([])
  

  const handleClick = async () => {
    console.log('btn clicked')
    // const receivedMsg = async () => {
    //     return await createCheckoutSession(cart);
    // }
    // console.log(receivedMsg)
    const res = await createCheckoutSession(cart)
    setResponse(res);
    
    console.log(response)
    console.log('after function call')
  }

  return (
    <>
    <main className="col-10 mt-5">
        
    <div className="mx-auto w-80 col-6 h-5">
        <button className="mt-4 btn-cart fw-bold fs-5" type='button' onClick={handleClick}>TESTING </button>
    </div>
    <div className="mt-5">
      {response.map((item) => 
        (
        <div className="my-5" key={item.id}>
          <h1>Item No: {item.id} </h1>
          <h3>Item Name: {item.name} </h3>
        </div>
        )
      )}
        
    </div>
    </main>
    </>
  )
}

export default TestBtn