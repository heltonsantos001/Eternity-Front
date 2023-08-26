import styled from "styled-components";

export const AbsoluteComponent = styled.div`
  width: 15rem;
  height: 16rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #313031;
  padding: 20px;
  z-index: 1000;
  border-radius: 0.5rem;

  input {
    width: 11.2rem;
    border: none;
    padding: 0.5rem;
    background-color: #313031;
    border-bottom: 1px solid black;
    outline: none;
  }
  label {
    button {
      .bi {
        background-color: #313031;
        border: none;
        outline: none;
      }
    }
  }
`;

export const PreImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  button {
    padding: 0.3rem;
    width: 5rem;
    margin: 0.2rem;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover {
      background-color: #636262;
    }
  }
`;
export const SpacePreImg = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
`;
