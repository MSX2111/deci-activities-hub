const express = require('express');
const fetch = require('node-fetch');
const User = require('./models/User');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests (if needed)
app.use(express.json());

// Error handler function: logs error and returns appropriate response.
function handleError(res, error) {
  console.error('An error occurred:', error);
  res.status(500).json({ error: 'An error occurred while processing the request.' });
}

// GET /users route: fetch data, create User instances, log info, and return JSON response.
app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    
    // Assuming the API returns data in a "users" array
    const usersArray = data.users || [];

    // Create User instances and log their details.
    const userInstances = usersArray.map(u => {
      const user = new User(u.id, u.firstName, u.lastName, u.email);
      user.displayInfo();
      return user;
    });

    // Return a JSON response with the user instances.
    res.json(userInstances);
  } catch (error) {
    handleError(res, error);
  }
});

// Start the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});