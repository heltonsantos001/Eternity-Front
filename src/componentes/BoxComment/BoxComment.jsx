import { Box, Container } from "./BoxCommentStyled";
import { useEffect, useState } from "react";
import { deleteComment } from "../../Services/PostService";
import {
  getTokenFromLocalStorage,
  getUserIdFromToken,
} from "../Auth/AuthProvider";

export const BoxComment = (props) => {
  const [deleteCommentButton, setDeleteCommentButton] = useState(false);
  const { id } = props;
  const { idUser } = props;
  const { idComment } = props;
  const { idPost } = props;

 

  const token = getTokenFromLocalStorage();
  const idToken = getUserIdFromToken(token);

   const deleteCommentFunction = async () => {
     try {
       await deleteComment(idPost, idComment,token);
     } catch (error) {
       console.log(error);
     }
   };

  useEffect(() => {
    if (id == idToken || idToken == idUser) {
      return setDeleteCommentButton(true);
    }
  }, [token]);

  const profileNavigate = ()=>{
    navigate("/profile")
  }

  return (
    <Container>
      <div>
        <img src={props.foto}/>
        <h3>{props.name}</h3>
      </div>
      <Box>
        <h1>{props.text}</h1>

        {deleteCommentButton ? (
          <i
            onClick={deleteCommentFunction}
            className="bi bi-backspace-fill"
          ></i>
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
};
