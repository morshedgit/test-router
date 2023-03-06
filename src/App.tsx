import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
