const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const ConversationV1 = require('watson-developer-cloud/conversation/v1');

const conversation = new ConversationV1({
  username: '942ab544-e3e4-418c-a47b-c0573ac51ed9',
  password: '4sLH03rrrWGW',
  version_date: '2018-01-06'
});

const params = {
  workspace_id: 'b92be708-4b4e-43fd-9bd5-8486fc66d99b'
};

app.prepare()
  .then(() => {
    const server = express();

    const processResponse = (err, response) => {
      if (err) {
        console.error(err); // something went wrong
        return;
      }

      // Display the output from dialog, if any.
      if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
      }
    };

    conversation.message(params, processResponse);

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
