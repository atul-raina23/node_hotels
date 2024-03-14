const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connection string
//const mongoURL = 'mongodb+srv://atulraina:Albakshji1234@cluster0.orzdhgf.mongodb.net/';
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});
//const mongoURL = 'mongodb+srv://atulraina:Albakshji1234@cluster0.orzdhgf.mongodb.net/';