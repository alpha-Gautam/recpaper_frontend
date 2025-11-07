import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Prelogin/LandingPage.jsx";
import Login from "./pages/Prelogin/Login.jsx";
import Register from "./pages/Prelogin/Register.jsx";
import "./App.css";
import ProfilePage from "./pages/PostLogin/ProfilePage.jsx";
import CreateProject from "./pages/PostLogin/CreateProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/createproject",
    element: <CreateProject />,
  },
  // { path: "/Home", element: <HomePage /> },
  // { path: "/About", element: <AboutPage /> },
  // { path: "/Contact", element: <ContactPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
