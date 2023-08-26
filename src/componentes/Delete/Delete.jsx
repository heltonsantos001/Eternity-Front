import { Container } from "./DeleteStyled";
import { deletePost } from "../../Services/PostService";
import { getTokenFromLocalStorage } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


export const Delete = (props) => {
  const { voltarPost } = props;
  const { id } = props;
  const token = getTokenFromLocalStorage();
  const navigate = useNavigate()

  const deletarPost = async () => {
    try {
        await deletePost(id, token);
        swal({
          title: "DELETE",
          text: "Post deletado com sucesso",
          icon: "success",
          confirmButtonText: "Ok",
        });

        voltarPost();
        navigate("/")
    } catch (error) {
        console.error("Erro ao deletar o post:", error);
         swal({
           title: "Erro",
           text: "Ocorreu um erro ao deletar o post",
           icon: "error",
           confirmButtonText: "Ok",
         });
    }
  };

  return (
    <>
      <Container>
        <h1>voce vai deletar esse post</h1>
        <div>
          <button onClick={deletarPost}> Deletar</button>
          <button onClick={voltarPost} className="voltar">
            voltar
          </button>
        </div>
      </Container>
    </>
  );
};
