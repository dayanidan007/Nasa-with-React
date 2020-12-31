import React, { useState, useEffect } from 'react'

export default function Media({ data }) {
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [secondary, setSecondary] = useState('')
    const [description, setDescription] = useState('')

    const info = () => {
        if (data !== undefined) {
            if (data.links !== undefined) {
                setLocation(data.data[0].location)
                setDate(data.data[0].date_created)
                setSecondary(data.data[0].secondary_creator)
                setDescription(data.data[0].description)
            } else if (data._id) {
                setLocation(data.location)
                setDate(data.date)
                setSecondary(data.secondary)
                setDescription(data.description)
            }
            else {
                setDate(data.date)
                setDescription(data.explanation)
            }
        }

    }
    useEffect(() => {
        info()
    })
    return (<div>
        <div>{location}</div>
        <div>date: {date}</div>
        <div>{secondary}</div>
        <div>{description}</div>

    </div>)
}