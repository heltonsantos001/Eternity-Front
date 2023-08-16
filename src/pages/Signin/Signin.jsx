import { Link } from "react-router-dom";

import {
  Container,
  Body,
  Div,
  DivInput,
  Input,
  DivButton,
} from "../Signup/SignupStyled";

export function Signin() {
  return (
    <>
      <Body>
        <Container>
          <Div>
            <Link to="/signup">
              <h1>resgiter</h1>
            </Link>
          </Div>
          <DivInput>
            <form action="">
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="password" required />
            </form>
          </DivInput>

          <DivButton>
            <button>Entrar</button>
          </DivButton>
        </Container>
      </Body>
    </>
  );
}
