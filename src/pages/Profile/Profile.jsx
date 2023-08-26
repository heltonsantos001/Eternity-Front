import { ProfileComponents } from "../../componentes/ProfileComponents/ProfileComponents.jsx";
import { PostProfile } from "../../componentes/Post/Post.jsx";
import React, { useEffect, useState } from "react";
import {
  getUserIdFromToken,
  getTokenFromLocalStorage,
} from "../../componentes/Auth/AuthProvider.jsx";
import { getUserById } from "../../Services/UserService.js";
import { getAllPostUser } from "../../Services/PostService.js";
import Eternity from "../../img/Eternity.jpg";
import { Message } from "../../componentes/ProfileComponents/ProfileStyled";
import { Delete } from "../../componentes/Delete/Delete.jsx";

export const Profile = () => {
  const [user, setUser] = useState("");
  const [post, setPost] = useState([]);
  const [founder, setfounder] = useState(false);
  const [renderPost, setrenderPost] = useState(false);
  const [three, setThree] = useState(true);
  const [verified, setverified] = useState(false);
  const [showDeletePost, setShowDeletePost] = useState(false);

  const token = getTokenFromLocalStorage();
  const id = getUserIdFromToken(token);


   if (!token) {
     return;
   }

  
  function getUserByIdFunction() {
    getUserById(id)
    .then((response) => {
      const user = response.data;
      setUser(user);
      user.founder === "true" ? setfounder(true) : setfounder(false);
      user.verified === "true" ? setverified(true) : setverified(false);
    })
    .catch((error) => {
      return;
    });};
  
  function getAllPostUserFunction(){
   getAllPostUser(id)
     .then((response) => {
       const post = response.data.results;
       if (post.length == 0) return setrenderPost(false);

       setrenderPost(true);

       setPost(response.data.results);
     })
     .catch((error) => {
       return;
     });
  };

   
  useEffect(() => {
    getUserByIdFunction();
    getAllPostUserFunction();
  }, []);

  const deletePost = () => {
    setShowDeletePost(true);
  };

  const voltarPost = () => {
    setShowDeletePost(false);
  };

  return (
    <>
      <ProfileComponents
        key={user._id}
        founder={founder}
        verified={verified}
        fotoUser={user.fotoPerfil}
        name={user.name}
        showButtons={true}
      />

      {renderPost ? (
        post.map((item) => {
          return (
            <PostProfile
              key={item.id}
              founder={founder}
              verified={verified}
              id={item.id}
              deletePost={deletePost}
              three={three}
              data={item.data}
              foto={item.foto}
              title={item.title}
              likes={item.likes}
              comments={item.comments}
              name={item.name}
              fotoUser={item.fotoUser}
            />
          );
        })
      ) : (
        <Message>
          <h1>Este usuario nao tem nenhuma postagem</h1>
          <img src={Eternity} alt="" />
        </Message>
      )}

      {showDeletePost ? post.map((item) => {
        return (
          <Delete
            key={item.id}
            id={item.id}
            voltarPost={voltarPost}
          />
        );
        })  : ""}
    </>
  );
};
