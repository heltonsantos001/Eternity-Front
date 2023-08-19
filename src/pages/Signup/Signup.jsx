import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { postFormData } from "../../Services/UserService";
import {
  Container,
  Body,
  Div,
  DivInput,
  Input,
  DivTermos,
  DivButton,
} from "./SignupStyled";

export function Signup() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    
    });

    const handleInputChange = event => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();

    
    postFormData(formData)
      .then((response) => {
         navigate("/signin")
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
      <>
        <Body>
          <Container>
            <Div>
              <Link to="/signin">
                <h1>login</h1>
              </Link>
            </Div>
            <form onSubmit={handleSubmit}>
              <DivInput>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                />
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
              <DivTermos>
                <input type="checkbox" required />
                <label htmlFor="termos">
                  Aceito os <a href="#">termos e condições</a>
                </label>
              </DivTermos>

              <DivButton>
                <button>Registrar</button>
              </DivButton>
            </form>
          </Container>
        </Body>
      </>
    );
}