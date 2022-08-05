import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"
import ChangePwdDialog from "../ChangePwdDialog/ChangePwdDialog";

function UserDetails() {
  const { auth } = useContext(AuthContext);

  return (
    <>
    <div className="user-details">
      <div className="user-details__msg">
      { Object.keys(auth).length > 1 ? (
        <h3>You are currently logged in as {auth.email}</h3>
      ) : (
        <h3>You are not logged in.</h3>

        
      )}
      </div>
      <div className="user-details__info">
        <dl>
          <dt className="col-lg-3 col-sm-12">Email:</dt>
          <dd className="col-lg-9 col-sm-12">{auth.email}</dd>
        </dl>
      </div>
      
      <footer>
        <button type="button" className="btn-cart" data-bs-toggle="modal" data-bs-target="#changePwdDialog" >Change password</button>
      </footer>
    </div>
    <ChangePwdDialog /> 
    </>
  )
}

export default UserDetails


