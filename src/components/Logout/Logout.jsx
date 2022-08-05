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
    <button className="btn-search" type="button" onClick={logoutUser}> Log out </button>
    </div>
    </>
  )
}


export default Logout;