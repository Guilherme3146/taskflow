import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { MOCK_USER } from "../lib/mocks";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      setUser(MOCK_USER);
      return { success: true };
    }
    return { success: false, message: "E-mail ou senha incorretos" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
