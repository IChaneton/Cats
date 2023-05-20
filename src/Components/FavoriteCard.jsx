import React from 'react'
import styles from './Cats.module.css'


const FavoriteCard = ({fav, showLocalImage}) => {
    return (
        <img
            src={fav}
            onClick={() => showLocalImage(fav)}
        >
        </img>
    )
}

export default FavoriteCard