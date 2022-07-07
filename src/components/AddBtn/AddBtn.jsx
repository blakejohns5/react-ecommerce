import { useEffect } from "react";


function AddBtn(props) {
  const { id, name, price, img, cart, setCartItems } = props;  

  const addToStorage = () => {
    // const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    setCartItems((prevCart) => {
      return (
        [
          ...cart, 
          {'key': id, 'id': id, 'name': name, 'price': price, 'img': img, 'qty': 1}
        ]
      );
    })
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  // let storedCart = JSON.parse(localStorage.getItem('cart'));
  // console.log(storedCart);
  
  useEffect(() => {
    console.log('useEffect run');
  }, [cart])

  return (
    <>
      <button className="btn__add btn btn-secondary font-weight-bold btn-md px-4 py-3 border fw-bold" onClick={addToStorage} >Add to Cart</button>
    </>
  )
}

export default AddBtn;