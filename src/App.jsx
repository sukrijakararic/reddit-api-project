import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Header } from "./components/Header";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Header />}>
    
  </Route>)
);
function App() {
  return <>{<RouterProvider router={router} />}</>;
}

export default App;
