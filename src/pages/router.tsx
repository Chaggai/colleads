import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "./LoadingPage";
import SneakPeek from "./SneakPeek";
import Signup from "./Signup";
import Step1 from "../components/signup/Step1";
import Step2 from "../components/signup/Step2";
import Step3 from "../components/signup/Step3";
import Step4 from "../components/signup/Step4";
import FirstTime from "./FirstTime";

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
    element: <SneakPeek />,
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [
      {
        path: "/signup/1",
        element: <Step1 />,
      },
      {
        path: "/signup/2",
        element: <Step2 />,
      },
      {
        path: "/signup/3",
        element: <Step3 />,
      },
    ],
  },
  {
    path: "/signup/4",
    element: <Step4 />,
  },
  {
    path: "/first-time",
    element: <FirstTime />,
  },
]);
