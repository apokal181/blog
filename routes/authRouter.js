const {Router} = require('express')

const {check} = require('express-validator')
const UserController = require("../controllers/UserController")
const PostController = require ("../controllers/PostController")
const router = Router()



router.post('/register',
    [
      check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
        UserController.register],
    )


router.post('/login', [
    check('email', "Введите корректный email").normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
        ],

    )
module.exports = router







