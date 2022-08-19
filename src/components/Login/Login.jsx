import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { checkLogin } from '../../helpers/loginCheck';

const Login = () => {

  const { login, loggedIn } = useContext(AuthContext);  
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');  
  const [pwdVisible, setPwdVisible] = useState(false);  

    
  const handleSubmit = async (e) => {    
    e.preventDefault();
    
    const user = await checkLogin(email, pwd);
    if (user) {
      login(user)
    } 
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedIn', 'true');
  }

  const togglePwd = () => {
      setPwdVisible(pwdVisible ? false : true);
  }

  return (
    <>
      {loggedIn ? (
        <section>
          <h1>You are now logged in</h1>
        </section>
      ) : (
        <section>
          
          <form id="loginForm" onSubmit={handleSubmit} className="login-form" >
            <div className="row">
              <label htmlFor="loginEmail "className="col-3">Email:</label>
              <input type="email" id="loginEmail" className="col-8 login-form__input" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className="row">
              <label htmlFor="loginPassword" className="col-3">Password:</label>
              <input type={pwdVisible ? "text" : "password"} id="loginPassword" className="col-8 login-form__input" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
              <button type="button" onClick={togglePwd} form="loginForm" className="col-1 btn-pw">{pwdVisible ? <FaEyeSlash /> : <FaEye />}</button>
            </div>  
            {/* btn separate from form         */}
          </form>
          <div className="modal-footer login-form__footer">  
            <button type="submit" form="loginForm" className="btn-cart" data-bs-dismiss="modal">Sign In</button>
            <div className='login-form__signup'>
              <div>Not a customer yet?</div>
              <Link to="/login" className="text-decoration-none"> Sign up here.</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Login