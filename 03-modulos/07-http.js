const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('New request!');
  console.log(req.url);

  // res.writeHead(201, { 'Content-Type': 'text/plain' });

  switch (req.url) {
    case '/hello':
      res.write('Hello, how are you?');
      break;

    default:
      res.write('Error 404: Not found');
      break;
  }

  res.end();
}

console.log('Listening on port 3000!');