import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import useAuthCheck from "./hooks/useAuthCheck";
import Loading from "./components/Loading";

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
