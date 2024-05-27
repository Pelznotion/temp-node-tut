const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("welcome to Pelznotion Home Page");
  }
  if (req.url === "/about") {
    res.end("Here is our company History");
  }
  res.end(`
  
  
  <h1>Oopsss!</h1>
  <p> The page you are looking for is not available</p>
  <a href=" / ">back home</a>
  `);
});
server.listen(5000);
