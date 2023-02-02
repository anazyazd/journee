const express = require('express');

const router = express.Router();

router.route('/register').post(userController.register);
router.route('/user').post(userController.login);