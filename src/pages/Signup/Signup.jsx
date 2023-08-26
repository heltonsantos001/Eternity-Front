import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { postFormData } from "../../Services/UserService";
import fundo from "../../img/fundo.jpg"
import swal from "sweetalert";
import { Termos } from "../../componentes/Termos/Termos";
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
  const [showTermos, setShowTermos] = useState(false)

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
        swal({
          title: "REGISTRAR",
          text: "erro ao registar",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const resgister = () => {
     navigate("/signin");
  }
  const TermosFunction =()=>{
    setShowTermos(true)
  }
   const voltarTermosFunction =()=>{
    setShowTermos(false)
  }

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
              <h1 onClick={resgister}>login</h1>
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
                  Aceito os{" "}
                  <span onClick={TermosFunction}>termos e condições</span>
                  {showTermos ? (
                    <Termos voltarTermosFunction={voltarTermosFunction} />
                  ) : (
                    ""
                  )}
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