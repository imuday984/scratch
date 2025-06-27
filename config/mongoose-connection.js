const mongoose = require('mongoose');
const dbgr= require('debug')('development:mongoose');
const config = require('./development.json');

mongoose.connect(`${config.MONGOOSE_URI}`)
    .then(() => dbgr('MongoDB connected'))
    .catch(err => dbgr('MongoDB connection error:', err));


module.exports = mongoose.connection;    