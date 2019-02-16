const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/ex-social-auth`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.info(`Connected to the database: ${MONGODB_URI}`))
    .catch(error => console.error(`Database connection error (${MONGODB_URI}):`, error));
