import DeleteDialog from "./DeleteDialog";


function DeleteBtn ({ product }) {

  return (
    <>      
        <button className="btn__delete" type="button" data-bs-toggle="modal" data-bs-target="#deleteDialog" >X</button>
        <DeleteDialog product={product} />
    </>
    
  )


}
export default DeleteBtn;
  
