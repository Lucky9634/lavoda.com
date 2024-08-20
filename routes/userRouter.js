const express = require("express")
const { loginUserPage, createUser, registerUser, loginUser, logoutUser } = require('../controllers/authController')
const { newProduct, shopAll, necklaces, bracelets, earrings, rings, shopsocial } = require('../controllers/userProduct')
const isLoggedIn = require("../middlewares/isLoggedIn")
const router = express.Router()


router.get('/login', loginUserPage)
router.get('/signup', createUser)
router.get('/logout', logoutUser)
router.post('/createUser', registerUser)
router.post('/loginUser', loginUser)

//products routes

router.get('/newProducts', isLoggedIn, newProduct)
router.get('/shopAll', isLoggedIn, shopAll)
router.get('/necklace', isLoggedIn, necklaces)
router.get('/bracelets', isLoggedIn, bracelets)
router.get('/earrings', isLoggedIn, earrings)
router.get('/rings', isLoggedIn, rings)
router.get('/shopSocial', isLoggedIn, shopsocial)

module.exports = router