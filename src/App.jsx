import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import { Posts } from "./features/redditPosts/Posts";
import { Root } from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Posts />} />
    </Route>
  )
);

function App() {
  return <><RouterProvider router={router} /></>
}

export default App;
