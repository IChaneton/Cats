import React from 'react'
import styles from './Cats.module.css'

const Viewer = ({isLoading, data, refetch, handleFavorites}) => {
  return (
    <>
        <div className={styles.imagen}> 
            {isLoading ? <h3>Cargando...</h3> : <img src={data[0].url} alt="cat" />}
        </div>
        <div className={styles.buttons}>
            <button onClick={refetch}>Cargar</button>
            <button onClick={()=>{handleFavorites(data[0].url)}}>Guardar/Borrar</button>
        </div>
    </>
  )
}

export default Viewer