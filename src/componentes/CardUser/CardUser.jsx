import { Container, Name } from "./CardUserStyled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getTokenFromLocalStorage,
  getUserIdFromToken,
} from "../Auth/AuthProvider";

export function CardUser(props) {
  const [verificar, setVerificar] = useState(false)
  const [verificarTwo, setVerificarTwo] = useState(false);
  const token = getTokenFromLocalStorage()
  const id = getUserIdFromToken(token)
  const { founder } = props
  const {verified} = props

  useEffect(() => {
    founder == "true" ? setVerificar(true) : ""
    verified == "true" ? setVerificarTwo(true) : "";
  }, [])


  const navigate = useNavigate()

  const ProfileUser = () => {
    if (id === props.id) return;
    
      navigate(`/profile/${props.id}`);
  };

  return (
    <>
      <Container onClick={ProfileUser}>
        <img src={props.fotoPerfil} alt="foto usuario" />
        <Name>{props.name}</Name>
        {verificarTwo ? (
          <abbr title="Verificado veterano">
            <i className="bi bi-patch-check"></i>
          </abbr>
        ) : (
          ""
        )}

        {verificar ? (
          <abbr title="Verificado de fundador, so fundadores possui esse verificado.">
            <i className="bi bi-patch-check-fill"></i>
          </abbr>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
