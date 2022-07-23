
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