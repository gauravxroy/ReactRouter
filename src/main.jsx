import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./components/About/About.jsx";
import { Home } from "./components/index.js";
import NotFound from "./components/Error/NotFound.jsx";
import User from "./components/User/User.jsx";
import GitHub, { dataInfo } from "./components/GitHub/GitHub";

// creating Route and path for components //Array of Objects with key values Approach
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//       {
//         path: "user/:userid",
//         element: <User />,
//       },
//       {
//         loader: { dataInfo },
//         path: "github",
//         element: <GitHub />,
//       },
//     ],
//   },
// ]);

//same as above //creating Route and path for components //Element Approach
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* //nested route */}
      {/* <Route path="about" element={<About />} >
      <Route path="gaurav"/ >
      </Route> */}
      {/* neested route */}
      <Route path="*" element={<NotFound />} />
      <Route path="user/:userid" element={<User />} />{" "}
      <Route loader={dataInfo} path="github" element={<GitHub />} />{" "}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* App component is required when we are performing and creating Routes in App.jsx */}
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* always takes a params  , , we can also use app.jsx , in place of RouterProvider */}
  </StrictMode>
);
