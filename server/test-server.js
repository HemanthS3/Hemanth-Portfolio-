const http = require('http');

// Test the server by making a GET request to the root endpoint
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/',
  method: 'GET'
};

console.log('Testing connection to server...');

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response from server:');
    console.log(data);
    console.log('\nServer is running correctly! ✅');
  });
});

req.on('error', (error) => {
  console.error('Error connecting to server:');
  console.error(error.message);
  console.log('\nMake sure the server is running with "npm start" in another terminal window.');
});

req.end();