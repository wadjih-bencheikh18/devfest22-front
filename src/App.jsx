import { Profile, Home, Description, Initialise, LandingPage } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "desc",
    element: <Description />,
  },
  {
    path: "init",
    element: <Initialise />,
  },
  {
    path: "load",
    element: <LandingPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
