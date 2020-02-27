import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, createUser] = useState([
    {
      isLoggedIn: false,
      email: '',
      cart: []
    }
  ]);

  return (
    <UserContext.Provider value={'hello context'}>
      {props.children}
    </UserContext.Provider>
  );
};
