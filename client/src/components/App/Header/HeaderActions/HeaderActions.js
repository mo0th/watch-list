import React, { useContext, useState } from "react"
import styled from "styled-components"

import { WatchListContext } from "#contexts/WatchListContext"
import IconButton from "#shared/IconButton"
import SearchIcon from "#shared/Icons/SearchIcon"
import FilterIcon from "#shared/Icons/FilterIcon"
import SettingsIcon from "#shared/Icons/SettingsIcon"

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const SearchForm = styled.form`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 425px) {
    justify-content: flex-end;
  }
`

const SearchInput = styled.input`
  padding: 0 0.5rem;
  background: none;
  border: none;
  border-bottom: 1px solid #eeeeee;
  color: #eeeeee;
  width: 100%;
  transition: box-shadow 300ms;
  max-width: 250px;

  &:hover,
  &:focus {
    box-shadow: inset 0 -2px 0 0 #eeeeee;
  }
`

const HeaderActions = () => {
  const { setSearchString } = useContext(WatchListContext)

  const handleChange = event => {
    setSearchString(event.target.value)
  }

  return (
    <>
      <SearchForm onSubmit={e => e.preventDefault()}>
        <SearchInput placeholder="Search" onChange={handleChange} />
        <IconButton size="2rem" title="Search">
          <SearchIcon />
        </IconButton>
      </SearchForm>
      <HeaderButtons>
        <IconButton size="2rem" title="Filter items">
          <FilterIcon />
        </IconButton>
        <IconButton size="2rem" title="Settings">
          <SettingsIcon />
        </IconButton>
      </HeaderButtons>
    </>
  )
}

export default HeaderActions
