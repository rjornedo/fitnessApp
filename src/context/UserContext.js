import React, { useState, createContext } from "react";

// Create context
const UserContext = createContext();

// Provider component to wrap your app
export function UserProvider({ children }) {
    const [user, setUser] = useState({ id: null, isAdmin: false });

    const unsetUser = () => {
        setUser({ id: null, isAdmin: false }); // Clear user state
        localStorage.removeItem("token"); // Remove token
    };

    return (
        <UserContext.Provider value={{ user, setUser, unsetUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
