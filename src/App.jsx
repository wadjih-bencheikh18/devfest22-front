import { Profile, Home, Description } from "./pages";
import { Navbar } from "./sections";
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
]);
function App() {
  return (
    <div className="w-screen min-h-screen font-poppins bg-[#ECE0E5]">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
