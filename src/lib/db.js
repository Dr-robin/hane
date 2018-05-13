const Monk = require('monk');
const config = require('./config');

const conn = Monk(config.getValue('database.url'));
conn.then(() => {
    console.log('Connected MongoDB Server');
});
module.exports = conn;
