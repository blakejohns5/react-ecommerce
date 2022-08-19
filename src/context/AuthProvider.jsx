import { createContext, useReducer } from 'react';
import { authReducer, AUTH_ACTIONS } from '../helpers/authReducer';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const initialState = {
    loggedIn: false, 
    user: undefined
  }
  
  const [ auth, authDispatch ] = useReducer(authReducer, initialState)

  const login = (userObj) => {
    const action = {
      type: AUTH_ACTIONS.LOGIN,
      payload: {
        loggedIn: true,
        user: userObj
      }
    }
    authDispatch(action);
  }

  const logout = () => {
    const action = {
      type: AUTH_ACTIONS.LOGOUT,
      payload: {
        loggedIn: false,
        user: {}
      }
    }
    authDispatch(action);
  }

  return (   
    <AuthContext.Provider value={{ ...auth, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>   
  )
}


export default AuthContext;