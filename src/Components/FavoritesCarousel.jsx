import React from 'react'
import styles from './Cats.module.css'
import FavoriteCard from './FavoriteCard'

const FavoritesCarousel = ({favs, showLocalImage}) => {
    return (
        <>
            <div className={styles.favoritos}>
                {favs.map((fav) => {
                    return <FavoriteCard
                        key = {fav}
                        fav={fav}
                        showLocalImage={showLocalImage}
                    />
                }
                )
                }
            </div>
        </>
    )
}

export default FavoritesCarousel