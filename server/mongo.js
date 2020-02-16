const mongoose = require('mongoose');
const env = require('../config');
const key = env.authKey
const dbName = env.dbName
const port = env.port
const host = env.host

mongoose.Promise = global.Promise;
const mongoUri = `mongodb://${dbName}:${key}@${host}:${port}/?ssl=true&replicaSet=globaldb`;
function connect() {
  try {
    mongoose.connection.openUri(mongoUri)
    console.info("Connection Successfull!! ********************************")
    // return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key } });

  } catch (error) {
    console.log("Mongo Error ", error)
  }

}

module.exports = {
  connect,
  mongoose
};
