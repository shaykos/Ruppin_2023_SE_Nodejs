import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

  const [users, SetUsers] = useState([]);

  const LoadUsers = async () => {
    try {
      let res = await fetch('http://localhost:5008/api/users');
      let data = await res.json();
      console.table(data);
      SetUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    LoadUsers();
  }, []);

  const value = {
    users
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}