
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Button, Nav, SearchSpace, ErrorSpan } from "./NavbarStyled";
import { useForm } from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const searchSchema = z.object({
  name: z.string().nonempty({message:"A pesquisa não pode ser vazia"}).refine(value =>  !/^\s*$/.test(value),   {message:"A pesquisa não pode te apenas espaços"})
})

export function NavBar() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate()

  function onSearch(data) {
    const { name } = data
    navigate(`/search/${name}`);
    reset()

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
          <Link to="/signup">
            <Button>entrar</Button>
          </Link>
        </Nav>
        {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
        <Outlet />
      </>
    );
}

