const config = require('../config');
const dbAuthKey = config.authKey
const dbPort = config.port
const dbName = config.dbName
const dbHost = config.host
module.exports = function () {
  if (!dbAuthKey) {
    throw new Error('FATAL ERROR: DB AUTH KEY is not defined.');
  } else if (!dbPort) {
    throw new Error('FATAL ERROR: DB Port is not defined.');
  } else if (!dbName) {
    throw new Error('FATAL ERROR: DB Name is not defined.');
  } else if (!dbHost) {
    throw new Error('FATAL ERROR: DB Host is not defined.');
  }
}