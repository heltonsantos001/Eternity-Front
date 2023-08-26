import { styled } from "styled-components";

export const Main = styled.main`
  background-color: #d3d1d1;
  width: 18rem;
  height: 25rem;
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);

`;

export const Div = styled.div`
    font-size: 0.8rem;
    font-family: Arial, Helvetica, sans-serif;
    max-height: 20rem;
    overflow: auto;
    h1 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      text-decoration: underline;
    }
    h3 {
      font-size: 0.8rem;
      margin-bottom: 0.75rem;
      text-decoration: underline;
      color: #e2190a;
    }
    p {
      margin: 0.4rem 0;
    }
  
`;

export const SpaceButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  button {
    width: 3.5rem;
    padding: 0.4rem;
    background-color: #ffffff;
    border: 0.1rem solid #000000;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
      background-color: #e2e0e0;
    }
  }
`;