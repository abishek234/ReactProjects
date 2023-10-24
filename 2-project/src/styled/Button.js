import styled from "styled-components";

export const Button = styled.button`
  color: red;
  padding: 10px 18px;
  background: lightblue;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: aqua;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: lightblue;
  border: 1px solid black;
  color: red;
  &:hover {
    background-color: aqua;
    border: 1px solid transparent;
    color: black;
  }
`;
