import React from "react"

import {
  DecidedNotToWatchIcon,
  OnHoldIcon,
  ReWatchingIcon,
  UnwatchedIcon,
  WatchedIcon,
  WatchingIcon
} from "#shared/Icons"

const StatusIcon = ({ status }) => {
  switch (status) {
    case "decided not to watch":
      return <DecidedNotToWatchIcon title="Decided not to watch" />
    case "on hold":
      return <OnHoldIcon title="On hold" />
    case "rewatching":
      return <ReWatchingIcon title="Rewatching" />
    case "unwatched":
      return <UnwatchedIcon title="Unwatched" />
    case "watched":
      return <WatchedIcon title="Watched" />
    case "watching":
      return <WatchingIcon title="Watching" />
    default:
      return <p title={status}>{status}</p>
  }
}

export default StatusIcon
