import { USERS_URL, fetchData } from "./apis";



export const checkLogin = async (email, password) => {
  console.log('hello from checkLogin')
  const users = await fetchData(USERS_URL);
  const storedUser = users.find((obj) => obj.email === email)      

  if (storedUser && storedUser.password === password) {    
      const userObj = { 
        'id': storedUser.id,
        'username': storedUser.username,
        'email': storedUser.email
      } 
      return userObj;
  }
}