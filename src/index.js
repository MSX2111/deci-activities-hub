const express = require('express');
const fetch = require('node-fetch');
const User = require('./models/User');

const app = express();
const PORT = 3000;

app.use(express.json());

function handleError(res, error) {
  console.error('An error occurred:', error);
  res.status(500).json({ error: 'An error occurred while processing the request.' });
}

app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    
    const usersArray = data.users || [];

    const userInstances = usersArray.map(u => {
      const user = new User(u.id, u.firstName, u.lastName, u.email);
      user.displayInfo();
      return user;
    });

    res.json(userInstances);
  } catch (error) {
    handleError(res, error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
