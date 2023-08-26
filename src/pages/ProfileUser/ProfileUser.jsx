import { ProfileComponents } from "../../componentes/ProfileComponents/ProfileComponents";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../../componentes/ProfileComponents/ProfileStyled"
import Eternity from "../../img/Eternity.jpg"
import { getUserById } from "../../Services/UserService"
import{getAllPostUser}from'../../Services/PostService'
import {PostProfile}from '../../componentes/Post/Post'

export const ProfileUser = () => {
  const [user, setUser] = useState("");
    const [post, setPost] = useState([]);
    const [renderPost, setrenderPost] = useState(false);
    const [founder, setfounder] = useState(false);
    const [verified, setverified] = useState(false);

  const { id } = useParams();


  const searchUser = async () => {
    try {
      const response = await getUserById(id);
      const user = response.data
      setUser(user)
       user.founder === "true" ? setfounder(true) : setfounder(false);
       user.verified === "true" ? setverified(true) : setverified(false);
      } catch (error) { console.error(error)}
    }

    const searchPost = async () => {
    try {
      const response = await getAllPostUser(id);
         const post = response.data;
      if (post.length === 0) return setrenderPost(false);
         setrenderPost(true);
      setPost(response.data.results);
    
      } catch (error) { console.error(error);}
      
    }

    useEffect(() => {
    searchPost()
    searchUser()
  }, [post]);

  return (
    <>
      <ProfileComponents
        key={user._id}
        founder={founder}
        verified={verified}
        fotoUser={user.fotoPerfil}
        name={user.name}
        showButtons={false}
      />

      {renderPost ? (
        post.map((item) => {
          return (
            <PostProfile
              key={item.id}
              id={item.id}
              founder={founder}
              verified={verified}
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
    </>
  );
};
