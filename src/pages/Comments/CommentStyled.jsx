import { styled } from "styled-components";

export const Main = styled.main`
  position: relative;
  background-color: #333333;
  max-width: 800px;
  margin:auto;
  padding:1rem;
 

  img {
    width: 100%;
    margin: none;
  }
 
`;

export const StyledForm = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 800px;
  position: fixed;
  bottom: 0rem;
  display: flex;
  justify-content: center;

  input {
    width: 84.8%;
    padding: 0.5rem 0.2rem;
    outline: none;
  }

  button {
    bottom: 1rem;
    background-color: #600fbd;
    padding: 0.6rem 1rem;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #350869;
    }
  }
`;
