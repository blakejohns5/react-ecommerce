// import { Link } from "react-router-dom"
import Login from "../Login/Login"
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider';

function LoginDialog() {
  const { auth } = useContext(AuthContext);
  return (
    <>
    <div className="modal fade" id="loginDialog" tabIndex="-1" aria-labelledby="loginDialogLabel" aria-hidden="true">
    <div className="modal-dialog dialog__login p-1 ">
      <div className="modal-content ">
        <div className="modal-header">
          {Object.keys(auth).length === 0 &&
         <>
         <h5 className="modal-title" id="loginDialogLabel">Already a customer?</h5>
         </>
        }
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <Login />
        </div>
        {/* <div className="modal-footer d-flex align-items-center justify-content-center">
          <button type="submit" form="loginForm" className="btn__add px-5 py-1 fw-bold text-light me-5" 
          // data-bs-dismiss="modal"
          >Sign In</button> */}
          {/* <div className='d-flex gap-2'>
          <div>Not a customer yet?</div>
          <Link to="/login" className="text-decoration-none"> Sign up here.</Link>
          </div> */}
        {/* </div>        */}
      </div>
    </div>
  </div>
  </> 
  )
}

export default LoginDialog