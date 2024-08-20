const userModel = require("../models/userModels");
const genToken = require('../config/tokenGenerate')
const bcrypt = require('bcrypt')


module.exports.loginUserPage = (req, res) => {
    res.render("login")
}
module.exports.createUser = (req, res) => {
    res.render("signup")
}
module.exports.registerUser = async (req, res) => {
    try {
        let { fname, lname, email, password } = req.body
        let user = await userModel.findOne({ email })

        if (user) return res.send("User Already Exit. Please login..!")

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                let user = await userModel.create({
                    fname,
                    lname,
                    email,
                    password: hash
                })
                let token = genToken(user);
                res.cookie("token", token)
                req.flash("success", "User Created SuccessFull..!")
                res.redirect('/')
            })
        })
    } catch (error) {
        res.send("Something Went Wrong..!")
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await userModel.findOne({ email })
        if (!user) return res.send("Please Provide Rigth Information..!")
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                let token = genToken(user)
                res.cookie("token", token)
                req.flash("success", "User Is Loggedin...!")
                res.redirect('/')
            } else {
                res.send("Invailied Details")
            }
        })
    } catch (err) {
        res.send("Something Went Wrong..!")
    }
}


module.exports.logoutUser = (req, res) => {
    try {
        res.cookie("token", "");
        req.flash("success", "You Are Logout..!")
        res.redirect("/")
    } catch (error) {
        res.send(error.message)
    }
}

