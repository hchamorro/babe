import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: 'testing@email.com'
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
