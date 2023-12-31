import { Header, Comandos, Main } from "./ProfileStyled.jsx";
import { removeTokenFromLocalStorage } from "../Auth/AuthProvider.jsx"
import { useNavigate } from "react-router-dom";
import { Postagem } from "../../componentes/Postagem/Postagem.jsx";
import {EditProfile} from "../../componentes/EditProfile/EditProfile.jsx"
import React, { useState } from "react";

export const ProfileComponents = (props) => {
  const { showButtons } = props;
  const { founder } = props
  const { verified } = props
  const navigate = useNavigate();
  const removeLogin = () => {
    removeTokenFromLocalStorage();
    navigate("/");
  };
  const [showPostagem, setShowPostagem] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handlePostagemClick = () => {
    setShowPostagem(true);
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  const voltar = () => {
    setShowEdit(false);
    setShowPostagem(false);
  };


  return (
    <>
      <Main>
        <Header>
          <img src={props.fotoUser}></img>
          <h3>{props.name}</h3>
          {verified ? (
            <abbr title="Verificado veterano">
              <i className="bi bi-patch-check"></i>
            </abbr>
          ) : (
            ""
          )}
          {founder ? (
            <abbr title="Verificado de fundador, so fundadores possui esse verificado.">
              <i className="bi bi-patch-check-fill"></i>
            </abbr>
          ) : (
            ""
          )}
        </Header>
        {showButtons ? (
          <Comandos>
            <button onClick={handleEditClick}>Editar perfil</button>
            <button onClick={handlePostagemClick}>Postar</button>
            <button onClick={removeLogin}>Sair</button>
          </Comandos>
        ) : (
          ""
        )}
        {showPostagem && <Postagem voltar={voltar} />}
        {showEdit && <EditProfile voltar={voltar} />}
      </Main>
    </>
  );
};
