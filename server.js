const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//Uncommon bug:  Unexpected server termination due to unhandled promise rejection. 
//In a real-world application, asynchronous operations are common.  If a promise from a database query or other external API call rejects without a .catch handler, it can bring the server down. 
// This is less obvious than the common syntax errors. 