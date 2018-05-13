const Express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const Auth = require('../routes/auth');

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', Auth.expressRouter);

const port = config.getValue('server.port', 8734);
app.listen(port);
console.log(`Listening on port ${port}`);
