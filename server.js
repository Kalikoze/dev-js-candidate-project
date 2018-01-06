const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      /* eslint-disable no-console */
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    /* eslint-disable no-console */
    console.error(ex.stack);
    process.exit(1);
  });
