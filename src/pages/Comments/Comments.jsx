import { BoxComment } from "../../componentes/BoxComment/BoxComment";
import { useParams } from "react-router-dom";
import { PostId } from "../../Services/PostService";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../Services/UserService";
import { useEffect, useState } from "react";
import { Main, StyledForm } from "./CommentStyled";
import { addComment} from "../../Services/PostService";
import { getTokenFromLocalStorage } from "../../componentes/Auth/AuthProvider";

export const Comments = () => {
  const [comment, setComment] = useState("");
  const { idPost } = useParams();
  const [post, setPost] = useState([]);
  const [idUser, setidUser] = useState("");

  const navigate = useNavigate();
  const token = getTokenFromLocalStorage();

  const handleInputChange = (event) => {
        if (!token) {
          return navigate(`/signin`);
        }

    setComment(event.target.value);
  };

  const commentFunction = async () => {
      try {
        
          
      if (!comment.trim()) {
        return;
      }
            
          await addComment(token, comment, idPost);
          
      setComment("");

          
    } catch (error) {
      console.log(error);
    }
    };
    

  const foto = async () => {
    try {
      const response = await PostId(idPost);
      const idUser = response;
        setidUser(idUser);

      const postComments = response.comments;
      const postWithUsers = await Promise.all(
        postComments.map(async (comment) => {
          const user = await getUserById(comment.user);
          return {
            ...comment,
            user: user,
          };
        })
      );
      setPost(postWithUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    foto();
  }, [post]);

  return (
    <>
     
        <Main>
          {post.map((item) => {
            return (
              <BoxComment
                key={item.idComment}
                text={item.comment}
                foto={item.user.data.fotoPerfil}
                name={item.user.data.name}
                id={item.user.data._id}
                idUser={idUser.idUser}
                idPost={idUser.id}
                idComment={item.idComment}
              />
            );
          })}

          <StyledForm>
            <input type="text" value={comment} onChange={handleInputChange} />
            <button onClick={commentFunction}>
              <i className="bi bi-cursor-fill"></i>
            </button>
          </StyledForm>
        </Main>
    
    </>
  );
};
