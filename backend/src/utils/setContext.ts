import { validateAuthToken } from "./jwt";

export const setContext = async ({ req }: any) => {
  let token = req ? req.headers.authorization : null;

  if (token && typeof token === "string") {
    const authenticationScheme = "bearer ";
    if (token && token.toLowerCase().startsWith(authenticationScheme)) {
      token = token.slice(authenticationScheme.length, token.length);
      const currentUser = await validateAuthToken(token);
      return { currentUser };
    }
  }
};
