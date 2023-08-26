import {
  AbsoluteComponent,
  PreImage,
  DivButton,
  SpacePreImg,
} from "./EditProfileStyled";
import { UserUpdate } from "../../Services/UserService";
import React, { useState, useRef } from "react";
import { getTokenFromLocalStorage } from "../../componentes/Auth/AuthProvider.jsx";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const EditProfile = (props) => {
  const token = getTokenFromLocalStorage();

  const [textValue, setTextValue] = useState("");
  const [fileValue, setFileValue] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPosted, setIsPosted] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileValue(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFileIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!textValue && !fileValue) {
      swal({
        title: "EDITAR PERFIL",
        text: "Por favor, preencha ao menos um campos.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }

    const formData = new FormData();

    formData.append("name", textValue);

    if (fileValue) {
      formData.append("imagem", fileValue);
    }

    try {

       await UserUpdate(formData, token);

      swal({
        title: "EDITAR PERFIL",
        text: "usuario modificado com sucesso!.",
        icon: "success",
        confirmButtonText: "Ok",
      });
      setIsPosted(true);
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
      swal({
        title: "EDITAR PERFIL",
        text: "Erro ao modificar o perfil.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  if (isPosted) {
    return null;
  }

  return (
    <>
      <AbsoluteComponent>
        <form>
          <input
            type="text"
            value={textValue}
            onChange={handleTextChange}
            placeholder="Digite um Nome"
          />
          <label htmlFor="fileInput">
            <button type="button" onClick={handleFileIconClick}>
              <i className="bi bi-image"></i>
            </button>
          </label>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <SpacePreImg>
            {previewImage && (
              <PreImage src={previewImage} alt="Pré-visualização" />
            )}{" "}
          </SpacePreImg>
          <DivButton>
            <button onClick={handleSubmit}>Enviar</button>
            <button onClick={props.voltar}>voltar</button>
          </DivButton>
        </form>
      </AbsoluteComponent>
    </>
  );
};
