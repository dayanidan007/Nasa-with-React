const express = require('express')
const router = express.Router()
const Likes = require('../models/likes')

router.get('/likes', function (req, res) {
    Likes.find({}, function (err, likes) {
        res.send(likes)
    })
})

router.post('/like', function (req, res) {
    let { title, mediaType, media, location, date, secondary, description } = req.body.newbody
    const addAction = new Likes({
        title,
        mediaType,
        media,
        location,
        date,
        secondary,
        description
    })
    addAction.save()
        .then(response => {
            console.log('add Like')
        })
    res.send(addAction)
})

router.delete('/:title', function (req, res) {
    let title = req.params.title
    Likes.findOneAndDelete({ "title": title }).then(response => {
        console.log(` remone ${response.title}`)
        res.send(` remone ${response.title}`)
    })
})

module.exports = router