const jwt = require("jsonwebtoken")

const adminToken = (adminUser) => {
    return jwt.sign({ email: adminUser.email, id: adminUser._id }, `${process.env.ADMIN_TOKEN_SECRET_KEY}`)
}

module.exports = adminToken