const express = require("express")
const router = express.Router()
const userModels = require('../models/userModels')
const bcrypt = require('bcrypt')


router.get('/', (req, res) => {
    let success = req.flash('success')
    res.render("index", {success})
})


module.exports = router