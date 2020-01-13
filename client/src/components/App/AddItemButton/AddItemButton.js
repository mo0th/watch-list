import React, { useContext } from "react"
import styled from "styled-components"

import { WatchListContext } from "#contexts/WatchListContext"
import AddIcon from "#shared/Icons/AddIcon"

const Button = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  background: #9c9c9c77;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms;

  &:hover,
  &:focus {
    background: #bcbcbc88;
  }

  &:active {
    background: #bcbcbcaa;
  }
`

const AddItemButton = React.memo(() => {
  const { addItem } = useContext(WatchListContext)
  return (
    <Button
      onClick={() => {
        const name = prompt("Enter the film / show's name:")
        addItem(name)
      }}
    >
      <AddIcon />
    </Button>
  )
})

export default AddItemButton
