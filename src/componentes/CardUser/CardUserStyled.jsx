import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #0c0c0c, #2c2b2b);
  margin: auto;
  max-width: 800px;
  height: 7rem;
  padding: 1rem;
  border-bottom: 1px solid #313131;

  img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin: 1.5rem;
  }
  
  i {
    margin: 0 0.5rem;
    color: #7419c9;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;
export const Name = styled.h1`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size:1rem;
    font-weight:100;
    padding-left:1rem;
`