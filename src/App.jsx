import { Profile, Home } from "./pages";
import { Navbar } from "./sections";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Description } from "./pages/Description";
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
]);
function App() {
  return (
    <div className="w-screen h-screen  bg-[#ECE0E5]">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
