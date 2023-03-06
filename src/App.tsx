import "./App.css";
import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import useQuery from "./hooks/useQuery";

const QueryBuilder = ({
  keyTitle: key,
  value,
  onUpdate,
}: {
  keyTitle?: string;
  value?: string;
  onUpdate: (k: string, v: string) => void;
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const { key, value } = Object.fromEntries(formData.entries()) as {
          key: string;
          value: string;
        };
        onUpdate(key, value);
      }}
    >
      <input name="key" placeholder="key" defaultValue={key} />
      <input name="value" placeholder="value" defaultValue={value} />
      <button hidden type="submit">
        Submit
      </button>
    </form>
  );
};

const Home = () => {
  const { searchParams, updateSearchParams, deleteSearchParams } = useQuery();

  return (
    <div>
      <ul>
        {[...searchParams.entries()].map(([key, value]) => (
          <li key={key}>
            <QueryBuilder
              onUpdate={(key, value) => updateSearchParams([key, value])}
              keyTitle={key}
              value={value}
            />
            <button onClick={() => deleteSearchParams(key)}>Delete</button>
          </li>
        ))}
      </ul>
      <QueryBuilder
        onUpdate={(key, value) => updateSearchParams([key, value])}
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      Home
    </div>
  );
};

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Home />,
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
