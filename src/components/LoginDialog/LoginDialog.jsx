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
      </div>
    </div>
  </div>
  </> 
  )
}

export default LoginDialog