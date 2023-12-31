import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top:0;
  background-color:#fff;
  background-position: center center;
`

export const Container = styled.div`
  width: 20rem;
  height: 25rem;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


`;

export const Div = styled.div`
    display: flex;
    margin-left:2rem;

    h1{
        padding: 10px;
        margin-top:1.5rem;
        font-family:Arial, Helvetica, sans-serif;
        font-size:1rem;
        font-weight:100;
        color:#fff;

        &:hover{
            text-decoration:underline;
            cursor: pointer;
            
        }
    }
`
export const DivInput = styled.div`
  margin-left: 2rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  width: 85%;
  text-decoration: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  padding: 1rem 0.5rem;
  outline: none;
  color:#fff;
`;

export const Foto = styled.input`
  margin-top: 1.5rem;
  width: 40%;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  content: "Selecionar arquivo";
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;

export const DivTermos = styled.div`
    margin: 2rem;

    input{
        margin-right:.5rem;
    }

    label{
        color:#6e6d6d;
        span{
            color: #ffffff;
            text-decoration:underline;
            cursor:pointer;
        }
    }
    

`

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
 

  button {
    background-color: #ffffff;
    width: 80%;
    border: none;
    border-radius: 0.2rem;
    padding: 0.3rem;

    &:hover {
      cursor: pointer;
      background-color: #adadad;
    }
  }
`;

export const Alinhar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;