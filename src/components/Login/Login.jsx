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
          <form id="loginForm" onSubmit={handleSubmit} className="ms-3 d-flex flex-column gap-3" >
            <div className="row">
              <label htmlFor="loginEmail "className="col-3">Email:</label>
              <input type="email" id="loginEmail" ref={emailRef} className="col-8 w-50  " onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className="row d-flex">              
              <label htmlFor="loginPassword" className="col-3">Password:</label>
              <input type={pwdVisible ? "text" : "password"} id="loginPassword" className="col-8 w-50" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
              <button type="button" onClick={togglePwd} form="loginForm" className="ms-2 col-1 fw-bold text-dark border-0 bg-transparent ">{pwdVisible ? <FaEyeSlash /> : <FaEye />}</button>
            </div>  
            {/* btn separate from form         */}
          </form>
          <div className="modal-footer d-flex align-items-center justify-content-center mt-3">  
            <button type="submit" form="loginForm" className="btn__add px-5 py-1 fw-bold text-light me-5" data-bs-dismiss="modal">Sign In</button>
            <div className='d-flex gap-2'>
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