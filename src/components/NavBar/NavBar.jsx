import { Link } from 'react-router-dom';
import LoginDialog from '../LoginDialog/LoginDialog';
import { useContext} from 'react'
import AuthContext from '../../context/AuthProvider';
import Logout from '../Logout/Logout';
import { FaShoppingCart } from 'react-icons/fa';


function NavBar({ totalItems }) {
  const { auth } = useContext(AuthContext);
    
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
                <Link to='/checkout' className="nav-link">Checkout</Link>
              </li>
              <li className="nav-item">
                <Link to='/user' className="nav-link active" aria-current="page">User</Link>
              </li>
            </ul>
            {Object.keys(auth).length > 0 ? (
              <>
              <div className='nav-item justify-self-end text-dark fs-5 fw-bold me-5'>Welcome, {auth.username[0].toUpperCase() + auth.username.substring(1)}!</div>
              <Logout />
              </>
            ) : (
              <>
              <div className="nav-item">
              <button className="btn__search px-3 py-1 text-light mx-4 fw-bold border border-light" type="button" data-bs-toggle="modal" data-bs-target="#loginDialog"> Sign In </button>
             </div>
              </>
            )}
            <form className="d-flex align-items-center">
              <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn__search px-4 py-1 text-light mx-4 fw-bold border border-light" type="submit"> Go! </button>
              <Link to='/checkout' className="d-flex nav-link align-items-center">
                <div className="cart__icon text-dark fs-4 fw-bold"><FaShoppingCart /></div>
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