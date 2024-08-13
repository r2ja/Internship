import { useState, useEffect } from 'react'

function useFetch(url) {

    console.log("Use Fetch entered")

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`An error occurred: ${response.statusText}`)
                }

                const jsonData = await response.json()
                setData(jsonData)

                console.log(jsonData)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch;    