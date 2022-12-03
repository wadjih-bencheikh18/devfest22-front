import { Profile, Home, Description, Initialise, LandingPage } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProfileB } from "./pages/ProfileB";
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
  {
    path: "profileB",
    element: <ProfileB />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
