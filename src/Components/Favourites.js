import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from './MediaCard'

export default function Favourites() {
    const [likes, setLikes] = useState('')

    useEffect(() => {
        const getLikes = async () => {
            const Likes = await axios.get('http://localhost:4200/likes')
            setLikes(Likes.data)
        }
        getLikes()
    },[])

    console.log(likes)
    return (
        <div>
            {(likes.length > 0) && likes.map(l => <MediaCard data={l} />)}
        </div>
    )
}