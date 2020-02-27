import React, { useContext } from 'react';
import { UserContext } from '../utils/context/UserContextHc';

function Wellness() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      {user.email}
      Hello Wellness
    </div>
  );
}

export default Wellness;
