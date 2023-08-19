import { styled } from "styled-components";

export const Main = styled.div`
  margin: auto;

  max-width: 800px;
  background-color: #181818;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0 0 2rem;

  img {
    width: 5rem;
    border-radius: 50%;
  }
  h3 {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.4rem;
    margin: 0.2rem;
    text-align: center;
    color:#fff;
  }
`;

export const Comandos = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    padding: 0.4rem;
    margin: 0.2rem;
    width: 10rem;
    text-align: center;
    border-radius: 0.3rem;
    border: none;

    &:hover {
      background-color: #6d6d6d;
    }

  }
`;

export const Postagem = styled.div`
  margin: 0;
  img {
    width: 25%;
    margin: 0;
  }
`;
