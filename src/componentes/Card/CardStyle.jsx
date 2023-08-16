import { styled } from "styled-components";

export const Container = styled.section`
  background-color: #000000;
  border-bottom: 2px solid #2c2c2c;
  margin: auto;
  max-width: 800px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0;
`;

export const FotoPerfil = styled.img`
  width: 4rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export const Name = styled.h1`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

export const FotoPost = styled.img`
  width: 100%;
  margin: 0;
`;

export const Title = styled.h3`
  color: #fff;
  padding: 13px 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Span = styled.span`
  color: #fff;
  margin: 0 7px;
`;

export const Interaçao = styled.div`
  padding: 15px;

  i {
    color: #fff;
    width: 10px;
  }
`;
