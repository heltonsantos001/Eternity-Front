import { styled } from "styled-components";

export const Container = styled.section`
  background-color: #1f1d1d;
  border-bottom: 2px solid #2c2c2c;
  margin: auto;
  max-width: 800px;
  padding:.1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2c2c2c;
  margin: auto;
  padding: 1rem;
  margin: 0;
  position: relative;

 i{
    color:#7419c9;
    margin:0 .5rem ;
    cursor:pointer;
 }
 .update{
  position: absolute;
  right:1rem;
 }
`;

export const FotoPerfil = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 1.5rem 0 0rem;
`;

export const Name = styled.h1`
  color: white;
  font-size:.6rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 .5rem 0 0;
`;

export const FotoPost = styled.img`
  width: 100%;
  margin: 0;
`;

export const Title = styled.h3`
  color: #fff;
  padding: .3rem 0px;
  font-weight:100;
  font-size:.7rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 0 0 1rem;
`;

export const Span = styled.span`
  color: #fff;
  margin: 0 7px;
`;

export const Interaçao = styled.div`
  padding: 15px;
  display: flex;
  justify-content: start;
  gap: 0.8rem;
  position: relative;

  i {
    color: #fff;
    width: 10px;
    cursor: pointer;
  }
  h4 {
    color: #fff;
  }
  h5 {
    position: absolute;
    right: 1rem;
    color: #fff;
  }
`;

