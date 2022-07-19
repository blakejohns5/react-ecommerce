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
    <button className="btn__search px-3 py-1 text-light mx-4 fw-bold border border-light" type="button" onClick={logoutUser}> Log out </button>
    </div>
    </>
  )
}






export default Logout;