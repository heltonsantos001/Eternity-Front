import { ProfileComponents } from "../../componentes/ProfileComponents/ProfileComponents.jsx"
import { PostProfile } from "../../componentes/Post/Post.jsx"
import React, { useEffect, useState } from "react";
import {
  getUserIdFromToken,
  getTokenFromLocalStorage,
  
} from "../../componentes/Auth/AuthProvider.jsx";
import { getUserById } from "../../Services/UserService.js";


export const Profile = () => {

const [user, setUser] = useState("")

const token = getTokenFromLocalStorage();
useEffect(() => {
  

   if (!token) {
     console.log("Usuário não está logado.");
     return; 
   }
  const id = getUserIdFromToken(token);

   if (!id) {
     console.log("Usuário não está logado.");
     return; 
   }

  if (token)
    getUserById(id)
      .then((response) => {
        const user = response.data;
        setUser(user);
      })
      .catch((error) => {
        console.log("usuario nao encontrado");
      });
  
  
}, [token]);


    return (
      <>
        <ProfileComponents
          key={user._id}
          fotoUser={user.fotoPerfil}
          name={user.name}
        />
      </>
    );

}