import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { loginFormData } from "../../Services/UserService";
import fundo from "../../img/fundo.jpg";

import {
  Container,
  Body,
  Div,
  DivInput,
  Input,
  DivButton,
  Alinhar,
} from "../Signup/SignupStyled";

export function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    loginFormData(formData)
      .then((response) => {
        if (!response.token) return;
        localStorage.setItem("authToken", response.token);
        navigate("/profile");
      })
      .catch((error) => {
        console.log("login", error);
        swal({
          title: "EDITAR PERFIL",
          text: "senha ou email invalido!.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  const loginNavigate = () => {
    navigate("/signup");
  };

  return (
    <>
      <Body
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Div>
            <h1 onClick={loginNavigate}>resgiter</h1>
          </Div>
          <form onSubmit={handleSubmit}>
            <Alinhar>
              <DivInput>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  placeholder="password"
                  required
                />
              </DivInput>
              <DivButton>
                <button>Entrar</button>
              </DivButton>
            </Alinhar>
          </form>
        </Container>
      </Body>
    </>
  );
}
