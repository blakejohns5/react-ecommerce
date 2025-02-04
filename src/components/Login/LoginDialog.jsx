// import { Link } from "react-router-dom"
import Login from "./Login"


function LoginDialog() {
  


  return (
    <>
    <div className="modal fade" id="loginDialog" tabIndex="-1" aria-labelledby="loginDialogLabel" aria-hidden="true">
    <div className="modal-dialog dialog-login">
      <div className="modal-content ">
        <div className="modal-header">
          
         <>
         <h5 className="modal-title" id="loginDialogLabel">Already a customer?</h5>
         </>
        
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <Login />
        </div>
      </div>
    </div>
  </div>
  </> 
  )
}

export default LoginDialog