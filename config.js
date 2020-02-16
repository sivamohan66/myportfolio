const config = {};

config.host = process.env.DB_HOST || "[the endpoint URI of your Azure Cosmos DB account]";
config.authKey = process.env.AUTH_KEY || "[the PRIMARY KEY value of your Azure Cosmos DB account";
config.port = process.env.DB_PORT
config.dbName = process.env.DB_NAME


if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.DB_PORT || '3001'} to try the sample.`);
}

module.exports = config;