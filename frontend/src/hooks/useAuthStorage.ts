import { useContext } from "react";

import AuthStorageContext from "../context/AuthStorageContext";

const useAuthStorage = () => {
  const context = useContext(AuthStorageContext);
  if (context === undefined) {
    throw new Error("context is undefined");
  }

  return context;
};

export default useAuthStorage;
