import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 88vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 3rem;
    animation: Loading 2s linear infinite;

    @keyframes Loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }

  }
`;