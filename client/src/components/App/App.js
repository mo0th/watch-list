import React, { useContext } from "react"

import { WatchListContext } from "#contexts/WatchListContext"
import Loader from "#shared/Loader"

import AddItemButton from "./AddItemButton/AddItemButton"
import Header from "./Header"
import WatchList from "./WatchList"

const App = () => {
  const { loading } = useContext(WatchListContext)

  if (loading) return <Loader />

  return (
    <>
      <Header />
      <WatchList />
      <AddItemButton />
    </>
  )
}

export default App
