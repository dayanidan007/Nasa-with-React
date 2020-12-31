import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'

export default function Home() {
    const [APOD, setAPOD] = useState([])
    const apiKey = '6oVTliTpiKAtteELAcdib6uzrq9zV5s0AUIcjhD3'
    useEffect(() => {
        const getAPOD = async () => {
            let data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            setAPOD(data.data)
        }
        getAPOD()
    }, [])

    return (
        <div>
            <MediaCard data={APOD}/>
        </div>

    )
}