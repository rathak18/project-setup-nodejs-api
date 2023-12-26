const fs = require('fs');
const path = require('path');

const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log(`Created directory: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }
};

const createFile = (filePath, content) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
};

const projectPath = 'Crud-API'; // Change this to your desired project name
const srcPath = path.join(projectPath, 'src');
const controllersPath = path.join(srcPath, 'controllers');
const middlewarePath = path.join(srcPath, 'middleware');
const modelsPath = path.join(srcPath, 'models');
const configPath = path.join(srcPath, 'config');
const utilPath = path.join(srcPath, 'util');
const publicPath = path.join(projectPath, 'public');
const envFilePath = path.join(projectPath, '.env');
const gitignoreFilePath = path.join(projectPath, '.gitignore');
const appFilePath = path.join(srcPath, 'app.js');
const serverFilePath = path.join(srcPath, 'server.js');

// Create project directories
createDirectory(projectPath);
createDirectory(srcPath);
createDirectory(controllersPath);
createDirectory(middlewarePath);
createDirectory(modelsPath);
createDirectory(configPath);
createDirectory(utilPath);
createDirectory(publicPath);

// Create .env file
const envContent = `
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mydatabase
`;
createFile(envFilePath, envContent);

// Create .gitignore file
const gitignoreContent = `
node_modules
.env
`;
createFile(gitignoreFilePath, gitignoreContent);

// Create app.js
const appContent = `
const express = require('express');
const app = express();

// Middleware setup

// Routes setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
`;
createFile(appFilePath, appContent);

// Create server.js
const serverContent = `
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
    console.log(\`Server is running on port \${PORT}\`);
  });
});
`;
createFile(serverFilePath, serverContent);

console.log('Project structure created successfully!');
