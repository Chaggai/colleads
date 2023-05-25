import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "./LoadingPage";
import SneakPick from "./SneakPick";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/sneak-peek",
    element: <SneakPick />,
  },
]);
