import { useState } from "react";
import {
  AuthenticationContext,
  initialUserState,
  AuthenticationState,
  AuthenticationStateWithLogin,
} from "../store";
import { PropswithChildren } from "../../../core/custom-type";

export const AuthenticationContextProvider = (props: PropswithChildren) => {
  const [userState, setUserState] = useState<AuthenticationState>(initialUserState);

  const logIn = (login: string, password: string) => {
    setUserState({
        user: {surname: 'legolas', token: '123'},
        status: 'loggedIn'
    })
  };

  const logOut = () => {
    setUserState({
        user: null,
        status: 'loggedOut'
    })
  };

  const newContext: AuthenticationStateWithLogin = {
    user: userState,
    logIn,
    logOut,
  };

  return (
    <AuthenticationContext.Provider value={newContext}>
        {props.children}
    </AuthenticationContext.Provider>
  );
};
