import { useState, useEffect } from "react"
import { dataFetch } from "../helpers/fetch"

export const useFetch = (url, method, body) => {

    const [entries, setEntries] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getEntries = async () => {
        const entries = await dataFetch(url, method, body)

        setEntries(entries)
        setIsLoading(false)
    }

    useEffect(() => {
        getEntries()
    }, [])


    return {
        entries,
        isLoading
    }

}
