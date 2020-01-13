import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef
} from "react"
import styled from "styled-components"

import { WatchListContext } from "#contexts/WatchListContext"
import Container from "#shared/Container"

import WatchListItem from "./WatchListItem"
import WatchListEmpty from "./WatchListEmpty"

const Wrapper = styled.div`
  margin-top: 3rem;
`

const ColumnNames = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 3px;
  padding: 0 0.5rem;
  width: 100%;
  opacity: 0.7;

  span {
    display: block;
  }
`

const WatchList = () => {
  const { items } = useContext(WatchListContext)
  const [expandedItem, setExpandedItem] = useState(null)
  const watchListRef = useRef(null)
  const columnNameRef = useRef(null)
  const exp = useRef(null)
  useEffect(() => {
    const resetIfClickOutsideListItem = event => {
      if (
        !watchListRef.current.contains(event.target) &&
        event.target !== columnNameRef.current
      ) {
        setExpandedItem(null)
      }
    }

    document.addEventListener("click", resetIfClickOutsideListItem)

    return () => {
      document.removeEventListener("click", resetIfClickOutsideListItem)
    }
  }, [])

  const updateExpandedItem = id => {
    if (id !== expandedItem) setExpandedItem(id)
    else setExpandedItem(null)
  }

  const handleClick = useCallback(updateExpandedItem, [expandedItem])

  return (
    <Wrapper ref={watchListRef}>
      <Container>
        {items.length > 0 && (
          <ColumnNames ref={columnNameRef}>
            <div>title</div>
            <div>status</div>
          </ColumnNames>
        )}
        {items.length ? (
          <>
            {items.map(({ _id, name, status }) => (
              <WatchListItem
                expanded={expandedItem === _id}
                itemId={_id}
                key={_id}
                name={name}
                expandFn={handleClick}
                status={status}
              />
            ))}
          </>
        ) : (
          <WatchListEmpty />
        )}
      </Container>
    </Wrapper>
  )
}

export default WatchList
