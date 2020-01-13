import React, { createContext, useEffect, useState, useCallback } from "react"
import WatchListApi from "#api/WatchListApi"

export const WatchListContext = createContext()

const sortByNameProp = arr =>
  arr.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

export const WatchListProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([])
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    setLoading(true)
    WatchListApi.get().then(res => {
      const data = sortByNameProp(res.data)
      setAllItems(data)
      setItems(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (searchString !== "") {
      setItems(
        allItems.filter(item => item.name.toLowerCase().includes(searchString))
      )
    } else {
      setItems(allItems)
    }
  }, [searchString, allItems])

  const addItem = useCallback(
    async (name = "") => {
      if (name !== "") {
        const { data: newItem } = await WatchListApi.post("", {
          name
        })
        setAllItems(prev => sortByNameProp([...prev, newItem]))
      }
    },
    [setAllItems]
  )

  const deleteItem = async id => {
    await WatchListApi.delete(`/${id}`)
    setAllItems(prev => prev.filter(({ _id }) => _id !== id))
  }

  const updateSearchString = str => {
    setSearchString(str.trim().toLowerCase())
  }

  const updateStatus = async (id, status) => {
    await WatchListApi.put(`/${id}`, { status })
    setAllItems(prev =>
      prev.map(item => {
        if (item._id === id) {
          return {
            ...item,
            status
          }
        }
        return item
      })
    )
  }

  return (
    <WatchListContext.Provider
      value={{
        addItem,
        deleteItem,
        items,
        loading,
        searchString,
        setSearchString: updateSearchString,
        updateStatus
      }}
    >
      {children}
    </WatchListContext.Provider>
  )
}
