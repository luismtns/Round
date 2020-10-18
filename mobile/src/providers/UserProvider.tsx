import React, { createContext, useEffect, useState } from "react";
import { firebaseAuthService } from "../services/auth";

export const UserContext = createContext<any | null>({ user: null });

function UserProvider(props: any) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  console.log(user);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebaseAuthService.onAuthStateChanged(
      onAuthStateChanged
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default UserProvider;
