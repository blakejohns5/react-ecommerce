import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  const logoutUser = () => {
    setAuth({});
  }

  return (
    <>
    <div className="nav-item">
    <button className="btn btn-outline-light px-3 text-light ms-2 me-4 border border-light fw-bold border-2" type="button" onClick={logoutUser}> Log out </button>
    </div>
    </>
  )
}



export default Logout;