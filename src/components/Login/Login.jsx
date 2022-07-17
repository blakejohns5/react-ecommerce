import { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { Link } from 'react-router-dom'

const Login = () => {

  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  

  // Ref doesn't seem to work in this case, error
  // useEffect(() => {
  //   emailRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();   // prevent submission of form
    const url = 'http://localhost:5000/users';

    try {
      const res = await fetch(url);
      const data = await res.json();
      const user = data.find((obj) => obj.email === email)
      
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
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
    
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
          <form id="loginForm" onSubmit={handleSubmit} className="d-flex flex-column w-75 gap-3">
            <div className="d-flex align-items-center">
              <label htmlFor="email "className="w-25 me-1">Email:</label>
              <input type="email" id="email" ref={emailRef} className="w-75" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <div className="d-flex align-items-center">
              <label htmlFor="password" className="w-25 me-1">Password:</label>
              <input type="password" id="password" className="w-75" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
            </div>
            
            {/* btn separate from form         */}
          </form>
          <div className="modal-footer d-flex align-items-center justify-content-center">
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