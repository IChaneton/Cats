import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Error en la carga de datos")
                }
                const data = await response.json()
                setData(data);
            } catch (err) {
                setError("Error en la carga de datos")
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
       
    },[refresh])
  
    const refetch = () => {
        setRefresh(!refresh)
    }
    const showLocalImage = (url)=>{
        setData([{url : url}])
    }
    return {
        data, 
        refetch, 
        isLoading,
        error,       
        showLocalImage,
    }
  
}

export default useFetch