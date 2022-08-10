import { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { FAV_ACTIONS } from '../../helpers/favReducer';

const Logout = ({ favDispatch}) => {
  const { setAuth } = useContext(AuthContext);
  const logoutUser = () => {
    setAuth({});
    favDispatch({
      type: FAV_ACTIONS.RESET
      // no payload, reset only
    })
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