import axios from "axios"

const WatchListApi = axios.create({
  baseURL: "http://localhost:5000/WatchList"
})

export default WatchListApi
