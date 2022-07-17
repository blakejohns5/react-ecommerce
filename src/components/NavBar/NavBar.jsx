import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import LoginDialog from '../LoginDialog/LoginDialog';
import { useContext} from 'react'
import AuthContext from '../../context/AuthProvider';
import Logout from '../Logout/Logout';

function NavBar({ totalItems }) {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />
  const { auth, LoggedIn } = useContext(AuthContext);
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand"><strong>Spring Catalog</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/checkout' className="nav-link">Checkout</Link>
              </li>
            </ul>
            {Object.keys(auth).length > 0 ? (
              <>
              <div className='nav-item justify-self-end text-light fw-bold'>Welcome, {auth.username}!</div>
              <Logout />
              </>
            ) : (
              <>
              <div className="nav-item">
              <button className="btn__search btn-outline-light px-3 text-light mx-4 border border-light fw-bold border-2" type="button" data-bs-toggle="modal" data-bs-target="#loginDialog"> Sign In </button>
             </div>
              </>
            )}
            <form className="d-flex align-items-center">
              <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn__search btn-outline-light px-3 text-light fw-bold ms-2 me-4 border border-light border-2" type="submit"> Go! </button>
              <Link to='/checkout' className="d-flex nav-link align-items-center">
                <div className="cart__icon text-light fs-5 fw-bold">{cartIcon}</div>
                <div className="badge__items fw-bold">{totalItems}</div>
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <LoginDialog />
    </>
  )
}

export default NavBar;