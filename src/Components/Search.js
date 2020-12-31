import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'

export default function Search() {
    const [searchWord, setSearchWord] = useState('')
    const [searchData, setSearchData] = useState([])
    const sendWord = event => setSearchWord(event.target.value)

    useEffect(() => {
        const getData = async () => {
            let data = await axios.get(`https://images-api.nasa.gov/search?q=${searchWord}`)
            setSearchData(data.data.collection.items)
        }
        getData()
    }, [searchWord])

   
    return (
        <div>
            <input type='text' placeholder='Discover the space' onChange={sendWord}></input>
            {searchData.map(s => <MediaCard key={Math.random()} data={s}/> )}
        </div>)



}