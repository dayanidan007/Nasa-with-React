import ReactPlayer from 'react-player'
import React, { useState, useEffect } from 'react'
import Media from './Media'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'




export default function MediaCard({ data }) {
    const [title, setTitle] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [media, setMedia] = useState('')
    const [ShowMedia, setShowMedia] = useState(false)
    const [like, setLike] = useState(false)

    const info = () => {
        if (data !== undefined) {
            if (data.links !== undefined) {
                setTitle(data.data[0].title)
                setMediaType(data.links[0].render)
                setMedia(data.links[0].href)
            } else if (data._id) {
                setTitle(data.title)
                setMediaType(data.mediaType)
                setMedia(data.media)
                setLike(true)
            }
            else {
                setTitle(data.title)
                setMediaType(data.media_type)
                setMedia(data.url)
                setLike('no-like')
            }
        }

    }

    useEffect(() => {
        info()
    })

    const renderMedia = () => {
        if (ShowMedia === false) {
            setShowMedia(true)
        } else {
            setShowMedia(false)
        }
    }
    const liker = () => {
        if (like === true) {
            setLike(false)
            deleteLike(title)
        }
        if (like === false) {
            setLike(true)
            addLike()
        }
    }


    const addLike = async () => {
        const newbody =
        {
            title,
            mediaType,
            media,
            date: data.data[0].date_created,
            secondary: data.data[0].secondary_creator,
            description: data.data[0].description
        }
        const adding = await axios.post('http://localhost:4200/like', { newbody })
        return adding
    }

    const deleteLike = async (title) => {
        console.log(title)
        const remove = await axios.delete(`http://localhost:4200/${title}`)
        return remove
    }

    return (
        <Router>
            <div>
                <h3>{title}</h3>
                {mediaType === 'video' ? <ReactPlayer url={media} /> : <img src={media} alt='pic' width='300px' height='200px' onClick={renderMedia}></img>}
                {ShowMedia === true ? <Media data={data} /> : <p></p>}
                <div>
                    {like === false ? <button onClick={liker}>LIKE</button> :
                        like === 'no-like' ? <p>Discover the universe</p> :
                            <button onClick={liker}>DISLIKE</button>}
                </div>
            </div>
        </Router>
    )
}