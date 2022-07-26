
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { fetchData, postUser, USERS_URL } from '../../helpers/apis';

function Registration() {
  const {auth, setAuth } = useContext(AuthContext);
  const [pwdVisible, setPwdVisible] = useState(false);
  

  const [ email, setEmail ] = useState('');
  const [ pwd, setPwd ] = useState('');
  
  const togglePwd = () => {
    setPwdVisible(pwdVisible ? false : true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await fetchData(USERS_URL);    
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return;
    }
    const lastId = users.reduce((previous, current) => {
      return Math.max(previous.id, current.id)
    })
    const newUser = {
      id: lastId + 1,
      username: email.slice(0, email.indexOf('@')),
      email: email,
      password: pwd
    }
    postUser(USERS_URL, newUser);
  }

  return (
    <>
      <section>
        <div className='mt-5 py-5'>
        { Object.keys(auth).length > 0 ? (
            <h1>{auth.email} is logged in.</h1>
          ) : (
            <>
            <h2>You are not logged in.</h2>
            <h5 className="mt-5">Would you like to register now?</h5>
            </>
          ) 
        } 
        </div>
        <form id="signupForm" onSubmit={handleSubmit} className="fs-5 ms-3 d-flex flex-column gap-3" >
          <div className="row">
            <label htmlFor="signupEmail "className="py-1 col-3">Email:</label>
            <input type="email" id="signupEmail" className="col-8 w-50" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
          </div>
          
          <div className="row d-flex">              
            <label htmlFor="signupPassword" className="py-1 col-3">Password:</label>
            <input type={pwdVisible ? "text" : "password"} id="signupPassword" className="col-8 w-50" value={pwd} onChange={(e) => {setPwd(e.target.value)}} required />
            <button type="button" onClick={togglePwd} form="signupForm" className="ms-2 col-1 fw-bold text-dark border-0 bg-transparent ">{pwdVisible ? <FaEyeSlash /> : <FaEye />}</button>
          </div>            
          <div className='mt-5'>
          { Object.keys(auth).length > 0 ? (             
            <button type="submit" form="passwordChangeForm" className="btn__add px-5 py-1 fw-bold text-light me-5" >Change password</button>
          ) : (
            <button type="submit" form="signupForm" className="btn__add px-5 py-1 fw-bold text-light me-5">Sign Up</button>
          )}
          </div>
        </form>
        <article>

        </article>
      </section>
    </>
  )
}

export default Registration