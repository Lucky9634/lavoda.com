const jwt = require("jsonwebtoken")

const genToken = (user) => {
    return jwt.sign({ email: user.email, id: user._id }, `${process.env.TOKEN_SECRET_KEY}`)
}

module.exports = genToken