const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from djole08-dev without SSL!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});