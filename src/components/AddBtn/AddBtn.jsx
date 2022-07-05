
function AddBtn(product) {

  function createProductContext () {  
    console.log(product);
  
    return (
    <>
      <button className="btn__add btn btn-secondary font-weight-bold btn-md px-5 py-3 border rounded-pill fw-bold" onClick={ createProductContext }>Add to Cart</button>
    </>    
    )
  }
}

export default AddBtn;