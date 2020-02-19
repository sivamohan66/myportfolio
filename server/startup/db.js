const winston = require('winston');
const mongoose = require('mongoose');
// const env = require('config');
const config = require('../config');
const dbAuthKey = config.authKey
const dbPort = config.port
const dbName = config.dbName
const dbHost = config.host
const mongoUri = `mongodb://${dbName}:${dbAuthKey}@${dbHost}:${dbPort}/?ssl=true&replicaSet=globaldb`;
mongoose.Promise = global.Promise;

module.exports = function () {
  mongoose.connection.openUri(mongoUri)
    .then(() => winston.info(`Connected to ${dbName}...`));
}
