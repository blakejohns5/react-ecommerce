import React from 'react'
import DeleteDialog from '../DeleteDialog/DeleteDialog'

function DeleteBtn ({ id, product }) {


  return (
    <>
      <div>      
        <button className="btn__delete" type="button" data-bs-toggle="modal" data-bs-target="#deleteDialog">X</button>
      </div>
      {/* Delete modal */}
      <DeleteDialog key={id} product={product} />
    </>
  )


}
export default DeleteBtn;
  
