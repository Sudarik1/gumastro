
import { useState, useEffect } from "react"

const useGetPagesData = () => {
    const [pagesData, setPagesData] = useState([])

    useEffect ( ()=>{
        const fetchPagesData = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/page/')
                const data = await res.json()
                setPagesData(data)
            }
            catch (error) {
                console.log('Error fetching pages', error)
            }
        }
            
        fetchPagesData()
    }, [])

    return pagesData

}

export default useGetPagesData