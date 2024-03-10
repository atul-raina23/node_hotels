/*function add(a,b){
            return a+b;
}
var result=add(4,9);
console.log(result);
add();

(function(){
            console.log("Atul is added");
})();*/

//const { age } = require("./notes");

/*function callBack(){//this is our callback function that can be called in main function
            console.log("callback is added");
}
function add(a,b,callBack){//this is our main function
            var result=a+b;
            console.log("Result is:"+result);
            callBack();
}
add(3,8,callBack);*/
/*const add=function(a,b,atul){
            var result=a+b;
            console.log(result);
            atul();
}
add(2,5,()=> console.log('Addition completed'));*/




/*var fs = require('fs'); // Use 'fs' for file system operations
var os = require('os'); // Use 'os' for operating system related functionality

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', () => {
    console.log("file is created");

});
fs.writeFile('greeting.txt', 'Radhe Radhe ' + user.username + '!\n', () => {
    console.log("file is adjusted");

});
fs.unlink('greeting.txt', function() {
    console.log('File Deleted Successfully.');
});


console.log(os)
console.log(fs)
console.log(os.arch());//This gives the bit processor of device
console.log(os.networkInterfaces())//This method returns objects containing information about network interfacing devices.
console.log(os.platform())//Example windows mac or linux
console.log(os.userInfo())
console.log(os.homedir())*/




// Define a function that takes two numbers and a callback
/*function add(a, b, callback) {
    // Perform the addition operation
    const result = a + b;
    // Invoke the callback function with the result
    callback(result);
}

// Define a callback function to handle the result
function handleResult(result) {
    console.log("The result is:", result);
}

// Call the add function with two numbers and the callback
add(5, 3, handleResult); // Output: The result is: 8*/







/*const notes=require('./notes.js');
console.log("Server is available");
var age=notes.age;
var addNumber=notes.addNumber;
console.log(age,addNumber);*/

/*var _ = require('lodash');
var data = [23, 45, 67, 45,66,99, 'ram', 'sham', 9.5];
var result = _.uniq(data);
console.log(result);*/



/*const myJSON = '{"name":"John", "age":30, "car":"Verna"}';
const myObj = JSON.parse(myJSON);
x = myObj.name;
console.log(myObj.car)

const obToConvert={

            name:"rahul",
            age:34
};
const hel=JSON.stringify(obToConvert);
console.log(hel);
console.log(obToConvert.name)
console.log(typeof obToConvert)*/


//Express js server creation Module
/*const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Darling >>>>> How Can I Help You');
});

/*app.get('/chicken', (req, res) => {
    var customized_chicken = {
        name: "Matan",
        name2: "Lawabdaar Chicken",
        name3: "Jingur Chicken",
        isGravy: true,
        isChutney: false
    };
    res.send("Sure sir I can serve you a chicken. Here's your customized chicken: " + JSON.stringify(customized_chicken));
});
app.post('/items', (req, res) => {
    console.log("Data is saved");
    res.send("Data is Saved now");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});*/

/*const express = require('express');
const app = express();
const db=require('./db');


// POST route handler for "/items" endpoint
app.post('/items', (req, res) => {
    console.log("Data is saved");
    res.send("Data is Saved now");
});*/

// GET route handler for "/items" endpoint
/*app.get('/items', (req, res) => {
    // Logic to retrieve items from database or elsewhere
    res.send("Items retrieved successfully");
});*/


/*const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person');
const menu=require('./models/menu');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('Data saved successfully');
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
app.get('/person',async(req,res)=>{
            try{
                        const data=await person.find();
                        console.log('Data fetched successfully')
                        res.status(200).json({data});
            }
            catch(err){
                        console.error(err)
                        res.status(200).json({error},'Internal server error');
            }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/







/*app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const menuItem = new menuModel(data);
        const response = await menuItem.save();
        console.log("Data Saved Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

app.get('/menu', async (req, res) => {
    try {
        const data = await menuModel.find();
        console.log("Data Fetched Successfully");
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});*/



/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const menuRoute = require('./routes/menuRoute'); // Assuming menuRoute.js is in routes folder
const menuModel = require('./models/menu');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Welcome to our hotel');
});

// Uncomment the following lines if you want to handle /menu requests directly in this file
/*app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const menuItem = new menuModel(data);
        const response = await menuItem.save();
        console.log("Data Saved Successfully");
        res.status(200).json({ response });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});

app.get('/menu', async (req, res) => {
    try {
        const data = await menuModel.find();
        console.log("Data Fetched Successfully");
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Technical error' });
    }
});*/

// Using the router defined in menuRoute.js for /menu requests
/*app.use('/menu', menuRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/
// server.js


/*const express = require('express');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/persons', personRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/





/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/persons', personRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./models/person');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// GET persons by work type
app.get('/person/work/:workType', async (req, res) => {
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

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/


/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Use the routes defined in personRoutes.js


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
const personRoutes = require('./routes/personRoutes'); 
app.use('/person', personRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/


/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Use the routes defined in personRoutes.js
app.use('/person', personRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/

/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Use the routes defined in personRoutes.js
app.use('/person', personRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/



const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Routes
const menuRoutes = require('./routes/menuRoutes');


app.use('/menu', menuRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









































