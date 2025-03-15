const express = require('express');
const fetch = require('node-fetch');
const User = require('./User');

const app = express();
const port = 3000;

app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    
    // Create User instances for each fetched user
    const users = data.users.map(user => {
      const userInstance = new User(
        user.id,
        user.firstName,
        user.lastName,
        user.email,
        user.maidenName,
        user.age,
        user.gender,
        user.phone,
        user.username,
        user.password,
        user.birthDate,
        user.image,
        user.bloodGroup,
        user.height,
        user.weight,
        user.eyeColor,
        user.ip,
        user.hair,
        user.address,
        user.macAddress,
        user.university,
        user.bank,
        user.company,
        user.ein,
        user.ssn,
        user.userAgent,
        user.crypto,
        user.role
      );
      
      // Log user details
      userInstance.displayInfo();
      
      return userInstance;
    });
    
    // Return the User instances to the HTML page
    res.json(users);
  } catch (error) {
    handleError(error, res);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
