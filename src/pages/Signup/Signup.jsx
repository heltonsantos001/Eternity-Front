import { Link } from "react-router-dom";
import {
  Container,
  Body,
  Div,
  DivInput,
  Foto,
  Input,
  DivTermos,
  DivButton,
} from "./SignupStyled";

export function Signup() {
    return (
      <>
        <Body>
          <Container>
            <Div>
              <Link to="/signin">
                <h1>login</h1>
              </Link>
            </Div>
            <DivInput>
              <form action="">
                <Input type="text" placeholder="Nome" required />
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="password" required />
                <Foto type="file" required />
              </form>
            </DivInput>
            <DivTermos>
              <input type="checkbox" required />
              <label for="termos">
                Aceito os <a href="#">termos e condições</a>
              </label>
            </DivTermos>

            <DivButton>
              <button>Registrar</button>
            </DivButton>
          </Container>
        </Body>
      </>
    );
}