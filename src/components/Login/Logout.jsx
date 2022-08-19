import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider.jsx';
import { AUTH_ACTIONS, authReducer } from '../../helpers/authReducer.js';
import { FAV_ACTIONS } from '../../helpers/favReducer.js';

const Logout = ({ favDispatch}) => {
  
  const { logout, loggedIn } = useContext(AuthContext);

  const logoutUser = () => {
    // e.preventDefault();
    if(loggedIn === true) {
      logout();
    }
    favDispatch({
      type: FAV_ACTIONS.RESET
      // no payload, reset only
    })
    localStorage.setItem('user', null);
    localStorage.setItem('loggedIn', 'false');
  }

  return (
    <>
    <div className="nav-item">
    <button className="btn-search" type="button" onClick={logoutUser}>Sign out</button>
    </div>
    </>
  )
}


export default Logout;