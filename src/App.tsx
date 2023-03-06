import "./App.css";
import { createHashRouter, Link, RouterProvider } from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      element: (
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          Home
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          About
        </div>
      ),
    },
  ],
  {
    // basename: "test-router",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
