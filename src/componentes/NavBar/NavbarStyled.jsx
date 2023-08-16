import styled from "styled-components";

export const InputSearch = styled.input`
  outline: none;
  font-size: 1rem;
  padding: 0.6rem;
  border: none;
  width: 100%;
  border-radius: 0.3rem;
  background-color: rgb(107, 8, 199);
`;

export const SearchSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
    background-color: rgb(107, 8, 199);

    &:focus {
      border: 2px solid rgb(5, 5, 5);
    }
  }

  i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: rgb(107, 8, 199);
    border-radius: 0.3rem;
    padding: 0.6rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: -1px;
  width: 100%;
  padding: 1.5rem 1rem;
  z-index: 1;
  background-color: #242424;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  i {
    color:#000;
    padding: 0.6rem 1rem;
    border-radius: 3px;
    background-color: rgb(107, 8, 199);
  }
`;

export const Button = styled.button`
  background-color: rgb(107, 8, 199);
  border: none;
  outline: none;
  padding: 0.7rem 0.4rem;
  transition: all 0.4 ease-in-out;
  color: #fff;
  border-radius: 0.3rem;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 100%;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(63, 5, 117);
  }
`;
export const ErrorSpan = styled.span`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 100%;

`