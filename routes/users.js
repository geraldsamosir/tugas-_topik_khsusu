const express = require('express');
const router = express.Router();

//controller
const  UserController =  require('../controller/UserController')

//midleware
const UserMidleware =  require('../midleware/UserMidleware')

router.get('/',UserMidleware.isauth, UserMidleware.issuperauth, UserController.all);
router.post('/register',UserMidleware.isauth, UserMidleware.issuperauth,UserController.add);
router.delete('/:id',UserMidleware.isauth,UserMidleware.issuperauth,UserController.delete_user)
router.post('/login',UserController.login);

module.exports = router;
