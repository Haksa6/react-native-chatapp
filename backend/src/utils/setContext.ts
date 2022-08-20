import { validateAuthToken } from "./jwt";
import User from "../models/userSchema";

export const setContext = async ({ req }: any) => {
  let auth = req ? req.headers.authorization : null;

  if (auth && typeof auth === "string") {
    const authenticationScheme = "bearer ";
    if (auth.toLowerCase().startsWith(authenticationScheme)) {
      auth = auth.slice(authenticationScheme.length, auth.length);
      const decodedToken = await validateAuthToken(auth);
      const currentUser = await User.findOne({ decodedToken });

      return { currentUser };
    }
  }
};
