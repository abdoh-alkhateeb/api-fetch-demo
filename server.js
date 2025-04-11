const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.host || 'localhost';

app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'https://www.archive.org',
    changeOrigin: true,
  })
);

app.use(express.static('public'));

app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}`);
});
