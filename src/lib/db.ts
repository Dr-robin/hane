import Monk from 'monk';
import config from './config';

const conn = Monk(config.getValue('database.url'));
conn.then(() => {
    console.log('Connected MongoDB Server');
});
export default conn;