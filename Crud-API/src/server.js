
const mongoose = require('mongoose');
const app = require('./app');

// MongoDB connection setup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Start the server after successfully connecting to MongoDB
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
