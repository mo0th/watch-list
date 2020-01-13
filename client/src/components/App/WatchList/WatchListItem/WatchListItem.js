import React, { useState, useRef } from "react"
import styled from "styled-components"

import ListItemActions from "./ListItemActions"

import StatusIcon from "./StatusIcon"

const ListItemWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background 300ms, box-shadow 300ms;
  box-shadow: ${({ expanded }) =>
    expanded ? "0 0 0 0.25rem #252525" : "none"};
  background: ${({ expanded }) => (expanded ? "#252525" : "none")};
  &:hover {
    background: #2c2c2c;
  }
`

const ListItemSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 2rem;
  svg {
    flex-shrink: 0;
  }
  strong {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

const WatchListItem = React.memo(
  ({ expanded, expandFn, itemId, name, status }) => {
    return (
      <ListItemWrapper
        expanded={expanded}
        onClick={() => {
          expandFn(itemId)
        }}
      >
        <ListItemSummary>
          <strong>{name.trim()}</strong>
          <StatusIcon status={status} title={status} />
        </ListItemSummary>
        <ListItemActions itemId={itemId} expanded={expanded} itemName={name} />
      </ListItemWrapper>
    )
  }
)

export default WatchListItem
