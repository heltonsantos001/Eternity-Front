import { Link, useNavigate} from "react-router-dom";
import React,{ useState } from "react";
import { loginFormData } from "../../Services/UserService";

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

 const [formData, setFormData] = useState({
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
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    loginFormData(formData)
      .then((response) => {
        localStorage.setItem("authToken", response.token);
         navigate("/profile");
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
            <Link to="/signup">
              <h1>resgiter</h1>
            </Link>
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
