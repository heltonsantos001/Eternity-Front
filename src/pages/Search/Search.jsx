import { useParams } from "react-router-dom";
import { SearchName } from "../../Services/UserService";
import { useEffect, useState } from "react";
import { CardUser } from "../../componentes/CardUser/CardUser";



export function Search() {
  const { name } = useParams();
  const [Users, setUsers] = useState([]);
  
  async function searchUser() {
    try {
      const UsersApi = await SearchName(name);
      const users = UsersApi.data
      
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    searchUser();
   
  }, [name]);

    
  return (
    <>
          {Users.map((item) => {
              return (
                <CardUser
                  key={item._id}
                  id={item._id}
                  verified={item.verified}
                  founder={item.founder}
                  fotoPerfil={item.fotoPerfil}
                  name={item.name}
                />
              );
          })}
    </>
  );
}
