import { useEffect } from "react";


function AddBtn(props) {
  const { id, name, price, img, cart, setCartItems } = props;  

  const addToStorage = () => {
    // const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    let newCart = cart.map(item => {
      if (item.id === id) {
        return {...item, qty: item.qty += 1}
      } 
      return item;
    })

    setCartItems((prevCart) => {
      if (cart.some(product => product.id === id)) {
        return (
          [...newCart]
        )
      } else {
        return (
          [...cart, {'key': id, 'id': id, 'name': name, 'price': price, 'img': img, 'qty': 1}]
        );
      }
      
    })
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  return (
    <>
      <button className="btn__add btn btn-secondary font-weight-bold btn-md px-4 py-3 border fw-bold" onClick={addToStorage} >Add to Cart</button>
    </>
  )
}

export default AddBtn;