import React, { useContext } from 'react';
import { UserContext } from '../utils/context/UserContextHc';
import SignUpForm from '../components/SignUpFormHc';
function Wellness() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      {user.email}
      <SignUpForm />
      Hello Wellness
    </div>
  );
}

export default Wellness;
