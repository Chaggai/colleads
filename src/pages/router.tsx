import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import LoadingPage from "./LoadingPage";
import SneakPeek from "./SneakPeek";
import FirstTime from "./FirstTime";
import Signup from "./Signup";
import SignupStep1 from "../components/signup/Step1";
import SignupStep2 from "../components/signup/Step2";
import SignupStep3 from "../components/signup/Step3";
import SignupStep4 from "../components/signup/Step4";
import Login from "./Login";
import LoginStep1 from "../components/Login/Step1";
import LoginStep2 from "../components/Login/Step2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/first-time",
        element: <FirstTime />,
      },
    ],
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
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "/login/1",
        element: <LoginStep1 />,
      },
      {
        path: "/login/2",
        element: <LoginStep2 />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    children: [
      {
        path: "/signup/1",
        element: <SignupStep1 />,
      },
      {
        path: "/signup/2",
        element: <SignupStep2 />,
      },
      {
        path: "/signup/3",
        element: <SignupStep3 />,
      },
    ],
  },
  {
    path: "/signup/4",
    element: <SignupStep4 />,
  },
]);
