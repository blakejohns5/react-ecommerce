import { fetchData, USERS_URL, putUser } from "./apis";



export const updateUserWishlist = async (authEmail, clickedProduct, action) => {
  const users = await fetchData(USERS_URL)
  const user = users.find((user) => user.email === authEmail);
  console.log(users, user);
  let userFavs;
  
  if (!user) {
    return;
  }
  
  if (user) {
    userFavs = user.favorites
  } else {
    userFavs = [];
  }

  if (action === 'add') {
    userFavs.push(clickedProduct.id)
   } else {
    userFavs.filter((product) => product.id === clickedProduct.id);
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

