const { auth } = require('../../middlewear/auth');
const { handelValidation } = require('../../middlewear/handleValidation');
const { endPoints } = require('./endPoints');
const { creatPost } = require('./postController/createPost');
const { postValidation} = require('./validation');

const router = require('express').Router();

router.post("/post", auth(endPoints.postCrud), handelValidation(postValidation), creatPost)
module.exports = router