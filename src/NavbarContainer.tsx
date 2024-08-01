// src/NavbarContainer.tsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import userManager, { getUser, signOut } from './authConfig';

const NavbarContainer: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    getUser().then(user => {
      if (user) {
        console.log("User object: ", user); // Debugging: Print the entire user object
        setUsername(user.profile.name || ''); // Adjust according to the actual property name
      } else {
        console.log("No user found.");
        setUsername('');
      }
    }).catch(err => {
      console.error("Error fetching user: ", err);
    });
  }, []);

  const handleLogout = () => {
    signOut().then(() => {
      console.log('Logged out');
    }).catch(err => {
      console.error("Error during logout: ", err);
    });
  };

  return <Navbar username={username} onLogout={handleLogout} />;
};

export default NavbarContainer;
