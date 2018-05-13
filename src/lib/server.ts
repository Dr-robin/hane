import Express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import Auth from '../routes/auth';

const app: Express.Application = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/auth', Auth.expressConnector);

const port: number = config.getValue('server.port', 8734);
app.listen(port);
console.log(`Listening on port ${port}`);
