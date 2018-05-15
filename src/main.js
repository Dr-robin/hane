require('./lib/server');
const db = require('./lib/db');
db.sync({force: false});