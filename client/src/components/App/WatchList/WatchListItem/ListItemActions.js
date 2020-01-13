import React, { useContext } from "react"
import styled from "styled-components"

import { WatchListContext } from "#contexts/WatchListContext"
import IconButton from "#shared/IconButton"
import {
  DecidedNotToWatchIcon,
  DeleteIcon,
  OnHoldIcon,
  ReWatchingIcon,
  UnwatchedIcon,
  WatchedIcon,
  WatchingIcon
} from "#shared/Icons"

const Wrapper = styled.div`
  margin: 0.5rem auto 0;
  max-width: 500px;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: space-evenly;
`

const ListItemActions = React.memo(({ expanded, itemId, itemName }) => {
  const { updateStatus, deleteItem } = useContext(WatchListContext)
  return (
    <Wrapper show={expanded}>
      <IconButton
        size="2rem"
        title="Watching"
        onClick={() => updateStatus(itemId, "watching")}
      >
        <WatchingIcon />
      </IconButton>

      <IconButton
        size="2rem"
        title="Watched"
        onClick={() => updateStatus(itemId, "watched")}
      >
        <WatchedIcon />
      </IconButton>
      <IconButton
        size="2rem"
        onClick={() => updateStatus(itemId, "rewatching")}
      >
        <ReWatchingIcon />
      </IconButton>
      <IconButton
        size="2rem"
        title="Unwatched"
        onClick={() => updateStatus(itemId, "unwatched")}
      >
        <UnwatchedIcon />
      </IconButton>
      <IconButton
        size="2rem"
        title="On hold"
        onClick={() => updateStatus(itemId, "on hold")}
      >
        <OnHoldIcon />
      </IconButton>
      <IconButton
        size="2rem"
        title="Decided not to watch"
        onClick={() => updateStatus(itemId, "decided not to watch")}
      >
        <DecidedNotToWatchIcon />
      </IconButton>
      <IconButton
        size="2rem"
        title="Delete"
        onClick={() => {
          const titleCaseName = itemName
            .split(" ")
            .map(word => word[0].toUpperCase() + word.substring(1))
            .join(" ")
          const deleteConfirmation = confirm(
            `Are you sure you want to delete ${titleCaseName}?`
          )
          if (deleteConfirmation) deleteItem(itemId)
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Wrapper>
  )
})

export default ListItemActions
