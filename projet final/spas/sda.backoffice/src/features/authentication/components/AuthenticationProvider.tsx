import { useState } from "react";
import {
  AuthenticationContext,
  initialUserState,
  AuthenticationState,
  AuthenticationStateWithLogin,
} from "../store";
import { PropswithChildren } from "../../../core/custom-type";
import business from "../services/authentication.application";

export const AuthenticationContextProvider = (props: PropswithChildren) => {
  const [userState, setUserState] = useState<AuthenticationState>(initialUserState);

  const logIn = (login: string, password: string) => {
    business.logIn({ login, password})   // ou bien   business.logIn({ login: login, password: password})
            .then(user => {   
              setUserState({
                  user: {surname: user.surname, token: user.token},
                  status: 'loggedIn'
              })
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
