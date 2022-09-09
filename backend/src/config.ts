import "dotenv/config";

const port = process.env.PORT;
const url = process.env.MONGODB_URI;

const securityVariablesConfig = Object.freeze({
  secret: process.env.SECRET || "thesecret",
  timeExpiration: process.env.EXPIRATION || "2h",
});

export { port, url, securityVariablesConfig };
