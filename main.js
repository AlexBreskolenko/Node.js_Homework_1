const http = require("http");
let countMainPage = 0;
let countAboutPage = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    countMainPage++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF8" });
    res.end(
      `<h1>Корневая страница</h2>\n<p>Просмотров: ${countMainPage}</p>\n<a href='/about'>Ссылка на страницу /about.</a>`
    );
  } else if (req.url === "/about") {
    countAboutPage++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF8" });
    res.end(
      `<h1>Страница about</h2>\n<p>Просмотров: ${countAboutPage}</p>\n<a href='/'>Ссылка на страницу /</a>`
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF8" });
    res.end("<h2>Страница не найдена :( </h2>");
  }
});

const port = 3000;

server.listen(port);
