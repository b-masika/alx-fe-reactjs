// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    // Consume data directly
    const userData = useContext(UserContext);

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>{userData.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{UserData.age}</span></p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
};

export default UserProfile;