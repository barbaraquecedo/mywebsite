const express = require('express');
const logger = require('morgan');


/** configurations */
require('./config/db.config');


const app = express();

app.use(logger('dev'));
const routes = require('./config/routes.config');
app.use('/api', routes)


const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application running on port ${port}`))