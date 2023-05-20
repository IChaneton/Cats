import React from 'react'
import useFetch from '../Hooks/useFetch'
import useFavs from '../Hooks/useFavs'
import Viewer from './Viewer'
import FavoritesCarousel from './FavoritesCarousel'

const Cats = () => {
    const {data, refetch, isLoading, error, showLocalImage} = useFetch("https://api.thecatapi.com/v1/images/search")
    const {favs, handleFavorites} = useFavs()
  
    return (
    <> 
            <h2>Los gatos que le gustan a JM...</h2>
            <Viewer
                data = {data}
                refetch = {refetch}
                isLoading = {isLoading}
                handleFavorites = {handleFavorites}
            />
            <FavoritesCarousel
                favs={favs}
                showLocalImage={showLocalImage}
            />
        </>
  )
}

export default Cats