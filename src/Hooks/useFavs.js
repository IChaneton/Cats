import { useEffect, useState } from "react"
import {getFromLocalStorage, addToLocalStorage} from "../Utils/localStorage.utils"

const useFavs = (keyName = 'favs') => {
    const [favs, setFavs] = useState([])

    useEffect(()=>{
        const draft = getFromLocalStorage(keyName)
        draft && setFavs(draft)
    },[])
    // localStorage.clear()
    const isFavorite = (item) => {
        return favs.includes(item)
    }
    const addToFavorites = (item) => {
        const draft = [...new Set([...favs, item])];
        setFavs(draft);
        addToLocalStorage(keyName, draft)

    }
    const removeFromFavorites = (item) => {
        const draft = favs.filter((fav)=>fav != item)
        setFavs(draft)
        addToLocalStorage(keyName, draft)
    }
    const handleFavorites = (item) => {
        isFavorite(item) ? removeFromFavorites(item) : addToFavorites(item)
    }
  return {
    favs,
    handleFavorites
  }
}
export default useFavs