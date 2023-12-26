
const express = require('express');
const app = express();

// Middleware setup

// Routes setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
