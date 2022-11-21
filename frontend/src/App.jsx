import {RouterProvider, createBrowserRouter} from "react-router-dom";

import {Index} from "./pages";
import {Create} from "./pages/create";
import {View} from "./pages/view";
import {Login} from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/view",
    element: <View />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
