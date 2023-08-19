import { Header, Comandos, Main } from "./ProfileStyled.jsx";
import { removeTokenFromLocalStorage } from "../Auth/AuthProvider.jsx"
import { useNavigate } from "react-router-dom";
import { Postagem } from "../../componentes/Postagem/Postagem.jsx";
import React, { useState } from "react";

export const ProfileComponents = (props) => {

  const navigate = useNavigate()
  const removeLogin =()=>{
    removeTokenFromLocalStorage()
    navigate("/")
  }
    const [showPostagem, setShowPostagem] = useState(false);

    const handlePostagemClick = () => {
      setShowPostagem(true);
    };


  return (
    <>
      <Main>
        <Header>
          <img src={props.fotoUser} />
          <h3>{props.name}</h3>
        </Header>
        <Comandos>
          <button>Editar perfil</button>
          <button onClick={removeLogin}>Sair</button>
          <button onClick={handlePostagemClick}>Postar</button>
        </Comandos>
        {showPostagem && <Postagem />}
      </Main>
    </>
  );
};
