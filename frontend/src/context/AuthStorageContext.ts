import React from "react";

interface State {
  namespace: string;
  setAccessToken: any;
}

const AuthStorageContext = React.createContext<State | undefined>(undefined);

export default AuthStorageContext;
