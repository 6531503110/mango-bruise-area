import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        name: 'Pathomphong Chaichuay',
        email: 'pang@gmail.com',
        phone: '0123456789',
        country: 'Japan',
    });

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};
