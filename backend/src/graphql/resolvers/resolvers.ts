import { users } from "../../fakedata";

export const resolvers = {
  Query: {
    allUsers: () => users,
    findUser: (root: any, args: any) =>
      users.find(p => p.username === args.username),
  },
};
