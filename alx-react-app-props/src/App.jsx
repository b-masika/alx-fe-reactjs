
import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "janedoe@gmail.com"};

  return (
    // provide the userData to everyone inside this wrapper
    <UserContext.Provider value={userData}>
      <ProfilePage/>
    </UserContext.Provider>
  );
}

export default App;
