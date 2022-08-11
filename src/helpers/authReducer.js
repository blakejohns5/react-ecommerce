
export const AUTH_ACTIONS = {
  LOGIN: 'log in user',
  LOGOUT: 'log out user'
}


export const authReducer = (state = {}, action) => {
  switch ( action.type ) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      }
    case AUTH_ACTIONS.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
}