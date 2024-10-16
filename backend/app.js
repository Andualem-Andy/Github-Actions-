const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3031;

app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/name', (req, res) => {
  const name = 'Andualem Asamenew'; 
  res.json({ name }); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
