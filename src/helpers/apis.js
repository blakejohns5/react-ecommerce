
export const PRODUCTS_URL = 'http://localhost:5000/products';
export const USERS_URL = 'http://localhost:5000/users';


// get data from json server, depending on url argument
export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.log(error)
  }
} 



// post user to json server
export const postUser = async (url, userObj) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  }

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.log(error)
  }
}


// replace partial user info
export const putUser = async (url, newData) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  }

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.log(error)
  }
}