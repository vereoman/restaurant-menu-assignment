const express = require('express');
const { addMenuItem, getMenuItems } = require('../controllers/menuController');

const router = express.Router();

router.post('/menu', addMenuItem);
router.get('/menu', getMenuItems);

module.exports = router;
