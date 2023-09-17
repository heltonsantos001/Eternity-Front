import { Outlet, useNavigate, Link } from "react-router-dom";
import { Button, Nav, MiniImg, SearchSpace, ErrorSpan } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getUserIdFromToken,
  getTokenFromLocalStorage,
} from "../Auth/AuthProvider.jsx";
import React, { useEffect, useState } from "react";
import { getUserById } from "../../Services/UserService";

import Eternity from "../../img/Eternity.jpg";

const searchSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não pode te apenas espaços",
    }),
});

export function NavBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  
  function profile() {
    navigate("/profile");
  }

   
   
   const [imageURL, setImageURL] = useState("");

    const token = getTokenFromLocalStorage();


  useEffect(() => {
    if (!token) {
      return;
    }
    const id = getUserIdFromToken(token);

    getUserById(id)
      .then((response) => {
        const imageURL = response.data.fotoPerfil;
        setImageURL(imageURL);
      })
      .catch((error) => {
        console.log("Erro ao buscar usuário:", error);
      });
  }, [token]);

  function onSearch(data) {
    const { name } = data;
    navigate(`/search/${name}`);
    reset();
  }
  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <SearchSpace>
            <input
              {...register("name")}
              type="search"
              placeholder="Pesquise por usuario"
            />
            <i className="bi bi-search"></i>
          </SearchSpace>
        </form>
        <Link to="/">
          <i className="bi bi-infinity"></i>
        </Link>

        {token ? (
          <>
            <MiniImg
              onClick={profile}
              style={{
                backgroundImage: `url(${imageURL ? imageURL : Eternity})`,
                backgroundSize: "cover",
              }}
            />
          </>
        ) : (
          <>
            <Link to="/signup">
              <Button>entrar</Button>
            </Link>
          </>
        )}
      </Nav>
      {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
