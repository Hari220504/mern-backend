const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conn = require('./db');

// const {connectToMongoDB} = require('./db');

const app = express();

conn.connectToMongoDB();

// connectToMongoDB();

// app.use(cors({
//   origin: 'http://localhost:3000', // React dev server
//   methods: ['GET','POST','PUT','DELETE'], // allowed HTTP methods
//   credentials: true // if you want to send cookies
// }));

app.use(cors({
  origin: '*',   
  credentials: true 
}));



app.use(express.json());

const traineesRoute = require('./routes/trainees-route')

// const studentsRoute = require('./routes/students-route')

app.use('/api/v1/trainees', traineesRoute);

// app.use('/api/v1/students', studentsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server connected on port ${process.env.PORT}!!!`);
});




// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const User = require('./models/user');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // 🔗 Connect MongoDB (use your own connection string)
// mongoose.connect('mongodb://127.0.0.1:27017/userdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log('MongoDB connection error:', err));

// // Create user
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Get all users
// app.get('/users', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// // Get user by ID
// app.get('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update user
// app.put('/users/:id', async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedUser) return res.status(404).json({ message: 'User not found' });
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete user
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) return res.status(404).json({ message: 'User not found' });
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

