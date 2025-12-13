import { useState } from "react";

const useAuth = () => {
  // In a real app, you might check localStorage, context, or API
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return { isAuth, login, logout };
};

export default useAuth;
