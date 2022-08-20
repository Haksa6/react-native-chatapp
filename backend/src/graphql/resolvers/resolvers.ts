import merge from "lodash.merge";

import users from "./users";
import channels from "./channels";

export const resolvers = merge(users, channels);
