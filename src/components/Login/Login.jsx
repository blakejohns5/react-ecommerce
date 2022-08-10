import { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { USERS_URL, fetchData  } from '../../helpers/apis';

const Login = () => {

  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState(false);

  const [pwdVisible, setPwdVisible] = useState(false);
  
  // Ref doesn't seem to work in this case, error
  useEffect(() => {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();   // prevent submission of form
    const users = await fetchData(USERS_URL);
    const user = users.find((obj) => obj.email === email)      
    
    if (user === undefined) {
        setErrMsg('Login Failed');             
    } 
    
    if (user.password === pwd) {
      const username = user.username;
        setAuth({ email, username })
        setEmail('');
        setPwd('');
    } else {
        setErrMsg('Login Failed')
    }
    errRef.current.focus();    
  }

  const togglePwd = () => {
      setPwdVisible(pwdVisible ? false : true);
  }

  return (
    <>
      {Object.keys(auth).length > 0 ? (
        <section>
          <h1>You are now logged in</h1>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg fw-bold" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <form id="loginForm" onSubmit={handleSubmit} className="login-form" >
            <div className="row">
              <label htmlFor="loginEmail "className="col-3">Email:</label>
              <input type="email" id="loginEmail" ref={emailRef} className="col-8 login-form__input" onChange={(e) => setEmail(e.target.value)} value={email} required />
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