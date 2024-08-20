const express = require('express')
const router = express.Router()
const adminModel = require('../models/adminUser')
const bcrypt = require('bcrypt')
const adminToken = require('../config/adminToken')

router.get("/", (req, res) => {
    res.render("adminUser")
})

router.post("/createAdmin", async (req, res) => {
    try {
        let { fname, lname, email, password } = req.body
        let adminUser = await adminModel.findOne({ email })
        if (adminUser) return res.send("Your Account Already Exit. Please Login ..!")
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let adminUser = await adminModel.create({
                    fname,
                    lname,
                    email,
                    password: hash
                })
                let token = adminToken(adminUser)
                res.cookie('token', token)
                res.send("AdminUser Created SuccessFully..!")
            })
        })
    } catch (error) {
        res.send(error.message)
    }
})


router.post("/adminLogin", async (req, res) => {
    try {
        let { email, password } = req.body
        let adminUser = await adminModel.findOne({ email })
        if (!adminUser) return res.send("Please Enter The Currect Cridinsials")

        bcrypt.compare(password, adminUser.password, (err, result) => {
            if (result) {
                let token = adminToken(adminUser)
                res.cookie("token", token)
                res.send("You Are Login..!")
            } else {
                res.send("Invailid Details")
            }
        })

    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router