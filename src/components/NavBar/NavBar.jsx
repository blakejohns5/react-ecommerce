import { Link } from 'react-router-dom';
import LoginDialog from '../LoginDialog/LoginDialog';
import { useContext, useRef, useState } from 'react'
import AuthContext from '../../context/AuthProvider';
import Logout from '../Logout/Logout';
import { FaShoppingCart } from 'react-icons/fa';
import { BsBookmarkHeart } from 'react-icons/bs'
import FavoritesDialog from '../FavoritesDialog/FavoritesDialog';


function NavBar({ searchTerms, setSearchTerms, totalItems, favState, favDispatch }) {
  const { auth } = useContext(AuthContext);
  
  const searchHandler = (e) => {
    let str = e.target.value.toLowerCase();
    setSearchTerms(str);  
  }
  
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
                <Link to='/user' className="nav-link active" aria-current="page">Account</Link>
              </li>
              <li className="nav-item">
                <Link to='/checkout' className="nav-link">Shopping Cart</Link>
              </li>
            </ul>
            {Object.keys(auth).length > 0 ? (
              <>
              <div className='nav-item justify-self-end text-dark fs-5 fw-bold'>Welcome, {auth.username[0].toUpperCase() + auth.username.substring(1)}!</div>
              <Logout />
              </>
            ) : (
              <>
              <div className="nav-item">
              <button className="btn__search px-3 py-1 text-light rounded fw-bold border border-light" type="button" data-bs-toggle="modal" data-bs-target="#loginDialog"> Sign In </button>
             </div>
              </>
            )}
            <form className="d-flex align-items-center">
              <input className="form-control mx-5" type="search" placeholder="Search" aria-label="Search" onChange={searchHandler} />
            </form>
              <button className="border-0 fw-bold fs-2 mb-2 mx-3 bg-transparent text-dark" type="button" data-bs-toggle="modal" data-bs-target="#favoritesDialog"><BsBookmarkHeart /> </button>
              <Link to='/checkout' className="d-flex nav-link align-items-center">
                <div className="cart__icon text-dark fs-4 fw-bold"><FaShoppingCart /></div>
                <div className="badge__items fw-bold">{totalItems}</div>
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