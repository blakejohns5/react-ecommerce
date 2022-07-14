import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function NavBar({ totalItems }) {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />
  console.log(totalItems)
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-2 sticky-top">
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
            <form className="d-flex align-items-center">
              <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn__search btn-outline-light px-3 text-light me-4 border border-light border-2" type="submit"> Go! </button>
              <Link to='/checkout' className="d-flex nav-link align-items-center">
                <div className="cart__icon text-light fs-5 fw-bold">{cartIcon}</div>
                <div className="badge__items fw-bold">{totalItems}</div>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;