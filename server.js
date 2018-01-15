const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const bodyParser = require('body-parser');
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

let context;

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    const processResponse = (err, response) => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        return;
      }

      if (response.intents && response.intents[0]) {
        const intent = response.intents[0];
        const message = response.output.text[0];
        context = response.context;
        return { message: message, intent: intent.intent };
      }

      if (response.output.text.length != 0) {
        context - response.context;
        return {message: response.output.text[0]};
      }
    };

    server.get('/', (req, res) => {
      conversation.message(params, (err, data) => {
        app.render(req, res, '/', processResponse(err, data));
      });
    });

    server.post('/api/v1/message', (req, res) => {
      conversation.message({
        workspace_id: params.workspace_id,
        input: { text: req.body.message },
        context,
      }, (err, data) => {
        res.send(processResponse(err, data));
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      /* eslint-disable no-console */
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    /* eslint-disable no-console */
    console.error(ex.stack);
    process.exit(1);
  });
