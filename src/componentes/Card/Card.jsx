import {
  Container,
  Name,
  Nav,
  FotoPerfil,
  FotoPost,
  Title,
  Span,
  Interaçao,
} from "./CardStyle";

export function Card(props) {

    const formatDateTime = (dateTime) => {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      };

      return new Date(dateTime).toLocaleString("en-US", options);
    };

  
    return (
      <>
        <Container>
          <Nav>
            <FotoPerfil src={props.fotoUser} alt="imagem de perfil usuario" />
            <Name>{props.name}</Name>
            <p>{formatDateTime(props.data)}</p>
          </Nav>
          <div>
            <Title>
              <strong>{`${props.name}`}</strong>:{` ${props.title}`}
            </Title>
            <FotoPost src={props.foto} alt="imagem da postagem" />
          </div>
          <Interaçao>
            <i className="bi bi-star"></i>
            <Span>{props.likes?.length}</Span>
            <i className="bi bi-chat-right"></i>
            <Span>{props.comments?.length}</Span>
          </Interaçao>
        </Container>
      </>
    );
}

