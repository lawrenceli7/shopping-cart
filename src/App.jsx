import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

function Root() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
      </Routes>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
