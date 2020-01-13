import styled from "styled-components"

const IconButton = styled.button`
  border: none;
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  opacity: 0.5;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms, opacity 300ms;
  color: white;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:active {
    background: #fff3;
  }
`

export default IconButton
