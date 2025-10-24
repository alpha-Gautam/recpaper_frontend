import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  // { path: "/Home", element: <HomePage /> },
  // { path: "/About", element: <AboutPage /> },
  // { path: "/Contact", element: <ContactPage /> },
]);

function App() {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen bg-gray-500">
        <h1>REC Paper</h1>
      </div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
