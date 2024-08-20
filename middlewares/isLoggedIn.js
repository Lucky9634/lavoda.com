const jwt = require("jsonwebtoken");
const userModel = require('../models/userModels');

module.exports = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash("success", "You Need To Be Login First..!")
        return res.redirect("/")
    }

    try {
        let decoded = jwt.verify(req.cookies.token, `${process.env.TOKEN_SECRET_KEY}`);
        let user = await userModel.findOne({ email: decoded.email }).select("-password")
        req.user = user
        next()

    } catch (error) {
        req.flash("success", "something went wrong...!")
        res.redirect("/")

    }
}
