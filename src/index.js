const { parse } = require('url');
const http = require('http');

http
  .createServer((req, res) => {
    const { path } = parse(req.url.substring(1));
    res.statusCode = 302;
    res.setHeader(
      'Location',
      `https://player.twitch.tv/?video=${path.split('/').pop()}`,
    );
    res.end();
  })
  .listen(3000);
