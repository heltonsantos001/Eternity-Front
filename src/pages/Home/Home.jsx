import { useState, useEffect} from "react";
import { NavBar } from "../../componentes/NavBar/NavBar";
import { Card } from "../../componentes/Card/Card";
import { getAllPost } from "../../Services/PostService";

export function Home() {
  const [Post, setPost] = useState([]);

  async function findAllPosts() {
    const response = await getAllPost();
    setPost(response.data.results);
  }

  useEffect(()=>{
  findAllPosts()
  }, [])
 

  return (
    <>
      {Post.map((item) => {
        return (
          <Card
            key={item.id}
            foto={item.foto}
            title={item.title}
            likes={item.likes}
            comments={item.comments}
            name={item.name}
            fotoUser={item.fotoUser}
          />
        );
      })}
    </>
  );
}
