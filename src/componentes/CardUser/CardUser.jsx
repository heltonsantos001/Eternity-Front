import { Container, Name } from "./CardUserStyled";

export function CardUser(props) {
  return (
    <>
      <Container>
        <img src={props.fotoPerfil} alt="foto usuario" />
        <Name>{props.name}</Name>
      </Container>
    </>
  );
}
