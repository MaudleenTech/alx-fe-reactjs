import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import User from "./components/User";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login login={login} />} />

      {/* Protected Profile route */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Profile />
          </ProtectedRoute>
        }
      >
        {/* Nested routes */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic User route */}
      <Route path="/user/:userId" element={<User />} />
    </Routes>
  );
}

export default App;
