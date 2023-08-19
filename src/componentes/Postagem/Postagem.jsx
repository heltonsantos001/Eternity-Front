import {
  AbsoluteComponent,
  PreImage,
  DivButton,
  SpacePreImg,
} from "./PostagemStyled";
import { Postar } from "../../Services/PostService";
import React, { useState, useRef } from "react";
import {
  getTokenFromLocalStorage,
} from "../../componentes/Auth/AuthProvider.jsx";

export const Postagem = () => {
  const token = getTokenFromLocalStorage();
  console.log(token);

  const [textValue, setTextValue] = useState("");
  const [fileValue, setFileValue] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPosted, setIsPosted] = useState(false);
  const fileInputRef = useRef(null);

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

    if (!textValue || !fileValue) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const formData = new FormData();

    formData.append("title", textValue);

    if (fileValue) {
      formData.append("imagem", fileValue);
    }

    try {
      const response = await Postar(formData, token);
      alert("Postagem enviada com sucesso!");
      setIsPosted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao enviar a postagem. Por favor, tente novamente.");
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
            placeholder="Digite um título"
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
          </DivButton>
        </form>
      </AbsoluteComponent>
    </>
  );
};
