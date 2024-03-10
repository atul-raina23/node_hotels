// routes.js
/*const express = require('express');
const router = express.Router();
const Person = require('/../models/person');


router.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const person = new Person(data);
        const response = await person.save();
        console.log("Data Saved Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        console.log("Persons Fetched Successfully");
        res.status(200).json({ persons });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});
router.get('/:workType', async (req, res) => {
    const { workType } = req.params;

    try {
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await Person.find({ work: workType }).maxTimeMS(30000); // Increase timeout to 30 seconds
            console.log('Response Fetched');
            res.status(200).json({ response });
        } else {
            res.status(404).json({ error: 'Invalid type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
*/

/*const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const person = new Person(data);
        const response = await person.save();
        console.log("Data Saved Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        console.log("Persons Fetched Successfully");
        res.status(200).json({ persons });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

router.get('/:workType', async (req, res) => {
    const { workType } = req.params;

    try {
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await Person.find({ work: workType }).maxTimeMS(30000); // Increase timeout to 30 seconds
            console.log('Response Fetched');
            res.status(200).json({ response });
        } else {
            res.status(404).json({ error: 'Invalid type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;*/

/*const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const person = new Person(data);
        const response = await person.save();
        console.log("Data Saved Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        console.log("Persons Fetched Successfully");
        res.status(200).json({ persons });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

router.get('/work/:workType', async (req, res) => {
    const { workType } = req.params;

    try {
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await Person.find({ work: workType }).maxTimeMS(30000); // Increase timeout to 30 seconds
            console.log('Response Fetched');
            res.status(200).json({ response });
        } else {
            res.status(404).json({ error: 'Invalid type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;*/



