const MenuItem = require('../models/menuItem');

async function addMenuItem(req, res) {
	try {
		const { name, description, price } = req.body;
		if (!name || !price) {
			return res.status(400).json({ message: 'Name and price are required' });
		}

		const newItem = new MenuItem({ name, description, price });
		await newItem.save();
		res.status(201).json({ message: 'Menu item added', item: newItem });

	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

async function getMenuItems(req, res) {
	try {
		const items = await MenuItem.find();
		res.status(200).json(items);
        
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

module.exports = { addMenuItem, getMenuItems };
