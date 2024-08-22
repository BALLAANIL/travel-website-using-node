const express = require('express');
const mongoose = require('mongoose');
const loginRoute = require('./routes/auth'); // Adjust path as needed

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Abhishek:Abhi1724@cluster0.5vma2.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use the login route
app.use('/api', loginRoute);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
