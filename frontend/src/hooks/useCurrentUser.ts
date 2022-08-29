import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "../graphql/queries";

const useCurrentUser = () => {
  const { data, ...rest } = useQuery(CURRENT_USER, {
    fetchPolicy: "cache-and-network",
  });

  return { currentUser: data?.currentUser, ...rest };
};

export default useCurrentUser;
