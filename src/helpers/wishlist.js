import { fetchData, USERS_URL, putUser } from "./apis";


export const updateUserWishlist = async (authEmail, productId, action) => {
  const users = await fetchData(USERS_URL)
  const user = users.find((user) => user.email === authEmail);
  
  let userFavs;
    
  if (!user) {
    return;
  } else {
    userFavs = user.favorites
    console.log(userFavs)
  }

  if (userFavs.includes(productId)) {
    userFavs = userFavs.filter((id) => id !== productId);
  } else {
    userFavs.push(productId);    
  }

  const changedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    favorites: userFavs,
    active: true
  }
  
  putUser(`${USERS_URL}/${user.id}`, changedUser)
}


export const getUserWishlist = async (authEmail, products) => {   
  const users = await fetchData(USERS_URL)
  const user = users.find((user) => user.email === authEmail);
 
  if (!user) {
    return
  } 

  const userFavs = user.favorites;
  if (userFavs.length === 0) {
    return;
  }

  const favsArray = userFavs.map(storedId => {
    return products.find(product => product.id === storedId)
  })

  return favsArray;
}

