import "dotenv/config";

const port = process.env.PORT;
const url = process.env.MONGODB_URI;

const env = {
  development: process.env.NODE_ENV === "development",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};

export { port, url, env };
