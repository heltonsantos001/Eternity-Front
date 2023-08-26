import { styled } from "styled-components"

export const Container = styled.div`
  margin: 0 1rem 1rem 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 0.4rem 0;

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    h3 {
      color: #fff;
      font-size:.8rem;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

export const Box = styled.div`
  background-color: #ffffff;
  border-radius: 0 0.7rem 0.7rem 0.7rem;
  padding: 0.7rem;
  position: relative;
  width: 50%;

  h1 {
    font-size: 0.8rem;
    font-family: Arial, Helvetica, sans-serif;
    overflow-wrap: break-word;
    max-width: 100%;
    padding:.2rem 1rem 0 0;
  }
  i {
    position: absolute;
    right: 0.4rem;
    cursor:pointer;
  }
`;