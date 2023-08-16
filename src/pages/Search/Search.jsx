import { useParams } from "react-router-dom";
import { SearchName } from "../../Services/UserService";
import { useEffect, useState } from "react";
import { CardUser } from "../../componentes/CardUser/CardUser";

export function Search() {
  const { name } = useParams();
  const [Users, setUsers] = useState([]);

  async function search() {
    try {
      const UsersApi = await SearchName(name);
      setUsers(UsersApi.data);
      console.log(UsersApi.data);
    } catch (err) {
      console.log(err);
      setUsers([]);
    }
  }

  useEffect(() => {
    search();
  }, [name]);
    
  return (
    <>
          {Users.map((item) => {
              return (
                  <CardUser
                      key={item._id}
                      fotoPerfil={item.fotoPerfil} name={item.name}
                    />
              )
          })}
    </>
  );
}
