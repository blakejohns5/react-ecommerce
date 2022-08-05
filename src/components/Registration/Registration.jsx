
import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { fetchData, postUser, USERS_URL } from '../../helpers/apis';

function Registration() {
  const { auth } = useContext(AuthContext);
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
        <div className='registration'>
        { Object.keys(auth).length > 0 ? (
            <h1>{auth.email} is logged in.</h1>
          ) : (
            <>
            <h4>You are not logged in.</h4>
            <h4>Would you like to register now?</h4>
            </>
          ) 
        } 
        </div>
        <form id="signupForm" onSubmit={handleSubmit} className="registration__form"> 
          <div className="row">
            <label htmlFor="signupEmail "className="col-3">Email:</label>
            <input type="email" id="signupEmail" className="col-8" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
          </div>
          
          <div className="row">              
            <label htmlFor="signupPassword" className="col-3">Password:</label>
            <input type={pwdVisible ? "text" : "password"} id="signupPassword" className="col-8" value={pwd} onChange={(e) => {setPwd(e.target.value)}} required />
            <button type="button" onClick={togglePwd} form="signupForm" className="btn-pw col-1">{pwdVisible ? <FaEyeSlash /> : <FaEye />}</button>
          </div>            
          <footer>
          { Object.keys(auth).length > 0 ? (             
            <button type="submit" form="passwordChangeForm" className="col-6 btn-cart" >Change password</button>
          ) : (
            <button type="submit" form="signupForm" className="col-6 btn-cart">Sign Up</button>
          )}
          </footer>
        </form>
        <article>

        </article>
      </section>
    </>
  )
}

export default Registration