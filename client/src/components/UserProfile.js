import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data.user);
      } catch (error) {
        console.error(error.response.data); // Handle error
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {user.userName}</p>
          {/* Display other user data */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
