const http = require('http');

const app = http.createServer((request, response) => {
  response.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
