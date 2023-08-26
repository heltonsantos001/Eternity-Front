import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #3b3a3a;
  width: 16rem;
  height: 7rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: .7rem;
    font-family: Arial, Helvetica, sans-serif;
    height: 2rem;
    text-align:center;
    color:#fff;
  }
  button {
    padding: 0.4rem;
    background-color: #ff0000;
    border: 0.1rem solid #000;
    border-radius: 0.2rem;
    width: 4rem;
    margin: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #af0505;
    }
  }
  .voltar {
    background-color: #fff;
    &:hover {
      background-color: #bbb7b7;
    }
  }
`;