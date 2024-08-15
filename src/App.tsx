import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/routes/layout/Layout";
import Home from "@/routes/home/Home";
import Services from "@/routes/services/Services";
import MyWork from "@/routes/my-work/MyWork";
import AboutMe from "@/routes/about-me/AboutMe";
import "./App.css";

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
        path: "services",
        element: <Services />,
      },
      {
        path: "my-work",
        element: <MyWork />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
