import { useState, useEffect} from "react";
import { Card } from "../../componentes/Card/Card";
import { getAllPost } from "../../Services/PostService";
import { Message } from "../../componentes/ProfileComponents/ProfileStyled"
import Eternity from "../../img/Eternity.jpg";

export function Home() {
  const [Post, setPost] = useState([]);
  const [validPost, setvalidPost] = useState(false);

  async function findAllPosts() {
    const response = await getAllPost();
    const post = response.data
    if (post.length == 0) return setvalidPost(false)
    setvalidPost(true);
    setPost(response.data.results);
  }
  useEffect(() => {
    findAllPosts();

  }, [Post]);
  
 

  return (
    <>
      {validPost ? (
        Post.map((item) => {
          return (
            <Card
              key={item.id}
              verified={item.verified}
              founder={item.founder}
              id={item.id}
              data={item.data}
              foto={item.foto}
              title={item.title}
              likes={item.likes}
              comments={item.comments}
              name={item.name}
              fotoUser={item.fotoUser}
            />
          );
        })
      ) : (
        <Message>
          <h1>nao existe nenhuma postagem</h1>
          <img src={Eternity} alt="" />
        </Message>
      )}
    </>
  );
}
