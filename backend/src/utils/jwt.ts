import jwt from "jsonwebtoken";
import { securityVariablesConfig } from "../config";

//Creates te
export const createAuthToken = (username: string) => {
  return jwt.sign({ username: username }, securityVariablesConfig.secret, {
    expiresIn: securityVariablesConfig.timeExpiration,
  });
};

export const validateAuthToken = async (token: string) => {
  const user = await jwt.verify(token, securityVariablesConfig.secret);
  return user;
};
