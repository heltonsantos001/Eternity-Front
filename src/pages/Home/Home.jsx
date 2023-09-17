import { useState, useEffect } from "react";
import { Card } from "../../componentes/Card/Card";
import { getAllPost } from "../../Services/PostService";

import { Loading } from "../../componentes/Loading/Loading";
import Eternity from "../../img/Eternity.jpg";

export function Home() {
  const [Post, setPost] = useState([]);
  const [validPost, setvalidPost] = useState(false);

  async function findAllPosts() {
    try {
      const response = await getAllPost();

    if (!response) return;

    const post = response.data;

    if (post.length == 0) return setvalidPost(false);
    setvalidPost(true);
      setPost(response.data.results);
    } catch (e) { console.log("erro ao buscar post:", e) }
    
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
              idUser={item.idUser}
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
        <Loading />
      )}
    </>
  );
}
