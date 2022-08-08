import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { BsBookmarkHeart, BsCart3 } from 'react-icons/bs'
import AuthContext from '../../context/AuthProvider';
import LoginDialog from '../Login/LoginDialog';
import Logout from '../Logout/Logout';
import FavoritesDialog from '../Favorites/FavoritesDialog';




function NavBar({ searchTerms, setSearchTerms, totalItems, favState, favDispatch }) {
  const { auth } = useContext(AuthContext);
  
  const searchHandler = (e) => {
    let str = e.target.value.toLowerCase();
    setSearchTerms(str);  
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand navbar__link"><strong>Spring Catalog</strong></Link>
          <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
            <ul className="navbar-nav navbar__list">
              <li className="nav-item">
                <Link to='/user' className="nav-link active navbar__link" aria-current="page">Account</Link>
              </li>
              <li className="nav-item">
                <Link to='/checkout' className="nav-link navbar__link">Shopping Cart</Link>
              </li>
            </ul>
            {Object.keys(auth).length > 0 ? (
              <>
              <div className='nav-item navbar__welcome'>Welcome, {auth.username[0].toUpperCase() + auth.username.substring(1)}!</div>
              <Logout />
              </>
            ) : (
              <>
              <div className="nav-item">
              <button className="btn-search" type="button" data-bs-toggle="modal" data-bs-target="#loginDialog"> Sign In </button>
             </div>
              </>
            )}
            <form className="navbar__search">
              <input className="form-control " type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} />
            </form>
              <button className="btn-bookmark" type="button" data-bs-toggle="modal" data-bs-target="#favoritesDialog"><BsBookmarkHeart /> </button>
              <Link to='/checkout' className="navbar__cart-link nav-link">
                <div className="navbar__cart-icon"><BsCart3 /></div>
                <div className="navbar__cart-badge">{totalItems}</div>
              </Link>
            
          </div>
        </div>
      </nav>
      <LoginDialog />
      <FavoritesDialog favState={favState} favDispatch={favDispatch}  />
    </>
  )
}

export default NavBar;