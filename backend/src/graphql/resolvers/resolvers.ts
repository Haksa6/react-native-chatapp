import merge from "lodash.merge";

import messages from "./messages";
import users from "./users";

export const resolvers = merge(users, messages);
