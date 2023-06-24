// Import express module from node_modules folder
const express = require('express');

// Create an Express app
const app = express();

// Define folder with static files for my app
app.use(express.static('public'));

// Define our first Route:
app.get('/', (req, res) => {
  console.log("entro a la ruta '/'");
  // use res object to send a response
  // sendFile() method sends a file
  // __dirname is a global variable that contains the absolute path of the current directory
  res.sendFile(__dirname + '/views/home-view.html');
});

// Define our second Route:
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

// Define our third Route:
app.get('/cat', (req, res) => {
  res.sendFile(__dirname + '/views/cat-view.html');
});

// Start the server to begin listening on a port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
