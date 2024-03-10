const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

// Route to create a new menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const menuItem = new Menu(data);
        const response = await menuItem.save();
        console.log("Menu Item Saved Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

// Route to fetch all menu items
router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find();
        console.log("Menu Items Fetched Successfully");
        res.status(200).json({ menus });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

// Route to update a menu item by ID
router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const updateMenuData = req.body;
        const response = await Menu.findByIdAndUpdate(menuId, updateMenuData, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({ error: "Data not found" });
        }
        console.log("Data Updated");
        res.status(200).json({ response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

// Route to delete a menu item by ID
/*router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const response = await Menu.findByIdAndRemove(menuId);
        if (!response) {
            return res.status(404).json({ error: "Data not found" });
        }
        console.log("Data Deleted Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Technical error' });
    }
});*/
router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const response = await Menu.deleteOne({ _id: menuId });
        if (response.deletedCount === 0) {
            return res.status(404).json({ error: "Data not found" });
        }
        console.log("Data Deleted Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

module.exports = router;




