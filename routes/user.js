const express = require('express');
const router = express.Router();
const UsersController = require('../api/controllers/users');
const listplaces=require('../api/controllers/listplaces')
const reedemcards=require('../api/controllers/reedemcode')
const listreedem=require('../api/controllers/listreedem')
router.post('/signup',UsersController.user_signup);
router.post('/login',UsersController.user_login);
router.post('/reset_password',UsersController.reset_password);
router.delete('/:userID',UsersController.user_delete);
router.get('/placesdetail',listplaces.listqrcode)
router.post('/getreedempoints',reedemcards.getreedempoints)
router.get('/getreedemlist',listreedem.reedemcode)

module.exports = router;