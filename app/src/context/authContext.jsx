import { createContext, useContext, useEffect, useState } from "react";
import axios from "@/utils/axiosConfig";

export const AuthContext = createContext();

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    getUserFromLocalStorage() || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };
  const logout = async () => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
