import { createContext, useReducer } from 'react';
import { authReducer, AUTH_ACTIONS } from '../helpers/authReducer';
import { checkLogin } from '../helpers/loginCheck';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const initialState = {
    loggedIn: false, 
    user: undefined
  }
  
  const [ auth, dispatch ] = useReducer(authReducer, initialState)

  const login = (userObj) => {
    const action = {
      type: AUTH_ACTIONS.LOGIN,
      payload: {
        loggedIn: true,
        user: userObj
      }
    }
    dispatch(action);
    // localStorage.setItem('user', userObj);
    // localStorage.setItem('loggedIn', 'true');
  }

  return (   
    // <AuthContext.Provider value={{ auth, setAuth }}>
    <AuthContext.Provider value={{ ...auth, login: login }}>
      {children}
    </AuthContext.Provider>   
  )
}


export default AuthContext;