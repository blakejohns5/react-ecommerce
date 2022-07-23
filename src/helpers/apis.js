
export const PRODUCTS_URL = 'http://localhost:5000/products';
export const USERS_URL = 'http://localhost:5000/users';


// get products from json server
export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return data;
  }
  catch (error) {
    console.log(error)
  }
} 


// get users from json server



// post user to json server