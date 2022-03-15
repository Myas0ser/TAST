const { handelValidation } = require('../../middlewear/handleValidation');
const { signIn } = require('./userController/signIn');
const { signUp, confirm } = require('./userController/signUp');
const { signUpSchema, signInSchema, token} = require('./validation');

const router = require('express').Router();



router.post('/user/signup', handelValidation(signUpSchema), signUp)
router.post('/user/signin', handelValidation(signInSchema), signIn)
router.get('/confirm/:token', handelValidation(token), confirm)
module.exports = router