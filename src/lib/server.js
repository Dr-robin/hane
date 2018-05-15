const Express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const Auth = require('../routes/auth');

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
	let authHeader = (req.get('Authorization') || '').split(' ');
	if(authHeader[0] === 'Bearer') {
		req.sessID = authHeader[1];
	}
	next();
});

app.use('/auth', Auth.expressRouter);
app.use('/api/v1', require('../routes/apiv1').expressRouter);

const port = config.getValue('server.port', 8734);
app.listen(port);
console.log(`Listening on port ${port}`);
