const express = require('express');
const { default: mongoose } = require('mongoose');
const logger = require('morgan');
const createError = require('http-errors');


/** configurations */
require('./config/db.config');

const app = express();

app.use(express.json());
app.use(logger('dev'));
const { session, loadUser } = require('./config/session.config');
app.use(session);
app.use(loadUser);
const routes = require('./config/routes.config');
app.use('/api', routes)


/* faltan errores */

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.ValidationError) {
        error = createError(400, error);
    } else if (!error.status) {
        error = createError(500, error);
    }

    console.error(error)

    const data = {};
    data.message = error.message;
    if (error.errors) {
        data.errors = Object.keys(error.errors).reduce(
            (errors, key) => ({
                ...errors,
                [key]: error.errors[key]?.message || error.errors[key],
            }),
            {}
        );
    }

    res.status(error.status).json(data);
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application running on port ${port}`))

