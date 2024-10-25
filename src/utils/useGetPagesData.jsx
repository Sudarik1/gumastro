
import { useState, useEffect } from "react"

const useGetPagesData = () => {
    const [pagesData, setPagesData] = useState([])

    useEffect ( ()=>{
        const fetchPagesData = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/page/')
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