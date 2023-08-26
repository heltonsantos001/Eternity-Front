import {
  Container,
  Name,
  Nav,
  FotoPerfil,
  FotoPost,
  Title,
  Interaçao,
} from "./CardStyle";
import { useNavigate } from "react-router-dom";
import { LikeService } from "../../Services/PostService";
import {
  getTokenFromLocalStorage,
  getUserIdFromToken,
} from "../Auth/AuthProvider";
import { useState } from "react";

export function Card(props) {
  const navigate = useNavigate();
  const { founder } = props;
  const { verified } = props;
  const { three } = props;
  const { deletePost } = props;

  const formatDateTime = (dateTime) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "America/Sao_Paulo",
    };
    return new Date(dateTime).toLocaleString("pt-BR", options);
  };

  const token = getTokenFromLocalStorage();
  const id = getUserIdFromToken(token);
  const [likeStatus, setLikeStatus] = useState(false);

  function Eterno() {
    const like = localStorage.getItem(`like-${props.id}`);

    if (!like) return;

    if (like) {
      if (like === id) return setLikeStatus(true);
    }
  }
  setInterval(Eterno, 100);

  const likeFunction = async () => {
    try {
      if (!token) {
        return navigate(`/signin`);
      }

      const response = await LikeService(token, props.id);

      if (response.data.message === "like") {
        localStorage.setItem(`like-${props.id}`, id);
        setLikeStatus(true);
      } else {
        localStorage.removeItem(`like-${props.id}`);
        setLikeStatus(false);
      }
    } catch (error) {}
  };

  const CommentFunction = () => {
    navigate(`/comment/${props.id}`);
  };
  const profileNavigate = ()=>{
    navigate("/profile");
  }

  return (
    <>
      <Container>
        <Nav>
          <FotoPerfil
            onClick={profileNavigate}
            src={props.fotoUser}
            alt="imagem de perfil usuario"
          />
          <Name onClick={profileNavigate}>{props.name}</Name>
          {verified ? (
            <abbr title="Verificado veterano">
              {" "}
              <i className="bi bi-patch-check"></i>{" "}
            </abbr>
          ) : (
            ""
          )}
          {founder ? (
            <abbr title="Verificado de fundador, so fundadores possui esse verificado.">
              <i className="bi bi-patch-check-fill"></i>{" "}
            </abbr>
          ) : (
            ""
          )}
          {three ? (
            <i
              onClick={deletePost}
              className="bi bi-three-dots-vertical update"
            ></i>
          ) : (
            ""
          )}
        </Nav>

        <div>
          <Title>
            <strong>{`${props.name}`}</strong>:{` ${props.title}`}
          </Title>
          <FotoPost src={props.foto} alt="imagem da postagem" />
        </div>

        <Interaçao>
          {likeStatus ? (
            <i onClick={likeFunction} className="bi bi-star-fill"></i>
          ) : (
            <i onClick={likeFunction} className="bi bi-star"></i>
          )}{" "}
          <h4>{props.likes?.length}</h4>
          <i onClick={CommentFunction} className="bi bi-chat-right"></i>
          <h4>{props.comments?.length}</h4>
          <h5>{formatDateTime(props.data)}</h5>
        </Interaçao>
      </Container>
    </>
  );
}
