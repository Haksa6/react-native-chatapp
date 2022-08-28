import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_USER } from "../graphql/mutations";
import { useApolloClient } from "@apollo/client";

const useLogin = () => {
  const [mutate, result] = useMutation(LOGIN_USER);
  const apolloClient = useApolloClient();

  const login = async (username: string, password: string) => {
    console.log(username, password);
    const payload = await mutate({
      variables: { username: username, password: password },
    });
    const { data } = payload;

    if (data?.loginUser) {
      await AsyncStorage.setItem("token", data.loginUser.token);
      apolloClient.resetStore();
    }
    return payload;
  };

  return [login, result] as const;
};

export default useLogin;
