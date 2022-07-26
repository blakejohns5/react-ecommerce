import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"
import ChangePwdDialog from "../ChangePwdDialog/ChangePwdDialog";

function UserDetails() {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <>
    <div>
    { Object.keys(auth).length > 1 ? (
      <h3 className="my-5">You are currently logged in as {auth.email}</h3>
    ) : (
      <h3 className="my-5">You are not logged in.</h3>

      
    )}
    </div>
    <div className="pb-5">
      <dl className="d-block fs-5">
        <dt className=" col-lg-3 col-sm-12 float-start">Email:</dt>
        <dd className="col-lg-9 col-sm-12 float-start ">{auth.email}</dd>
      </dl>
    </div>
    
    <div className='pt-5'>
      <button type="button" className="btn__add px-5 py-1 fw-bold text-light me-5" data-bs-toggle="modal" data-bs-target="#changePwdDialog" >Change password</button>
    </div>
    <ChangePwdDialog /> 
    </>
  )
}

export default UserDetails


