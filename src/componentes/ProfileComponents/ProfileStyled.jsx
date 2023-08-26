import { styled } from "styled-components";

export const Main = styled.div`
  margin: auto;
  max-width: 800px;
  background-color: #181818;
  padding:1rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  height:6rem;
 

  div {
    width:5rem;
    height: 5rem;
    border-radius: 50%;
  }

  h3 {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0.3rem;
    margin: 0.1rem;
    text-align: center;
    color: #fff;
  }
  i {
    color: #7419c9;
    margin: 0 0.1rem;
    cursor: pointer;
  }
`;

export const Comandos = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    padding: 0.4rem;
    margin:   0.6rem;
    width: 10rem;
    text-align: center;
    border-radius: 0.3rem;
    cursor: pointer;
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

export const Message = styled.div`
  max-width: 800px;
  height: 14rem;
  margin: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
    font-size: 1rem;
    text-align: center;
  }
  img {
    width: 6rem;
    margin:auto;
  }
`;