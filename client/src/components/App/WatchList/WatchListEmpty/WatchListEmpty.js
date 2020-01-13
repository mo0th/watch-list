import React, { useContext } from "react"
import styled from "styled-components"

import { WatchListContext } from "#contexts/WatchListContext"

const Message = styled.h3`
  text-align: center;
  margin-top: calc(50vh - 2rem);
`

const WatchListEmpty = () => {
  const { searchString } = useContext(WatchListContext)
  return (
    <Message>
      {searchString
        ? "Nothing in your watch list matched this search"
        : "Your watch list is empty"}
    </Message>
  )
}

export default WatchListEmpty
