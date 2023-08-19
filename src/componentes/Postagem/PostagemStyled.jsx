import styled from "styled-components";

export const AbsoluteComponent = styled.div`
  width: 15rem;
  height: 16rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #5e13c0;
  padding: 20px;
  z-index: 1000;
  border-radius: 1rem;

  input {
    width: 11.2rem;
    border: none;
    padding: 0.5rem;
    background-color: #5e13c0;
    border-bottom: 1px solid black;
    outline: none;
  }
  label {
    button {
      .bi {
        background-color: #5e13c0;
        border: none;
        outline: none;
      }
    }
  }
`;

export const PreImage = styled.img`
width:100%;
border-radius:.5rem;

`

export const DivButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:1rem;

`
export const SpacePreImg = styled.div`
margin-top:1rem;
display:flex;
justify-content:center;
width:100%;
height:8rem;
`