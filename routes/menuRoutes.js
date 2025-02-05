const express = require('express');
const { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

const router = express.Router();

router.post('/menu', addMenuItem);
router.get('/menu', getMenuItems);
router.put('/menu/:id', updateMenuItem);
router.delete('/menu/:id', deleteMenuItem);

module.exports = router;
