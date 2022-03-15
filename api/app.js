const express = require('express');
const { default: mongoose } = require('mongoose');
const logger = require('morgan');


/** configurations */
require('./config/db.config');


const app = express();

app.use(logger('dev'));
const routes = require('./config/routes.config');
app.use('/api', routes)

/* faltan errores */

app.use((error, req, res, next) => {
    if (
        error instanceof  mongoose.Error.CastError && 
        error.message.includes("ObjectId") 
    ) {
        error = createError(404, 'Resource not found');
    } else if (error instanceof mongoose.Error.ValidationError) {
        error = createError(400, error);
    } else if (!error.status) {
        error = createError (500, error);
    }

    console.error(error);
})
const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application running on port ${port}`))

