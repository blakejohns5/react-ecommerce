import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-2 sticky-top">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand"><strong>Catalog</strong></Link>
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
            <form className="d-flex">
              <Link to='/checkout' className="nav-link">{cartIcon}</Link>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>    
    </>
  )
}

export default NavBar;