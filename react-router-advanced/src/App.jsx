import useAuth from "./components/useAuth";
import Login from "./components/Login";

function App() {
  const { isAuth, login } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}
