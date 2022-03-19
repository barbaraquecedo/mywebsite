const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mywebsite';

mongoose.connect(MONGODB_URI)
    .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
    .catch((error) => {
        console.error(`An error occurred while trying to connect to the database ${MONGODB_URI}`, error);
        process.exit(0)
    })

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.info('Mongoose succesfully disconnected')
        process.exit(0)
    })
})

module.exports.connectionUrl = MONGODB_URI;