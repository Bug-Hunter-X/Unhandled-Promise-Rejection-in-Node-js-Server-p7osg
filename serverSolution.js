const http = require('http');

const asyncFunction = async () => {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random < 0.5) {
        resolve('Async operation successful!');
      } else {
        reject(new Error('Async operation failed!'));
      }
    }, 1000);
  });
};

const requestListener = async (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  try {
    const result = await asyncFunction();
    response.end(JSON.stringify({ message: result }));
  } catch (error) {
    console.error('Error:', error.message);  // Log the error for debugging
    response.end(JSON.stringify({ error: 'Something went wrong!' }));
  }
};

const server = http.createServer(requestListener);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});