import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/routes/layout/Layout";
import Home from "@/routes/home/Home";
import Services from "@/routes/services/Services";
import "./App.css";
import "./fonts.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>my error page</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "quote",
        element: <Services />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
