import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import RedefinePasswordPage from "../pages/RedefinePasswordPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route  path="/" element={<HomePage />} />
      <Route path="/signUpPage" element={<SignUpPage />} />
      <Route path="/forgotPasswordPage" element={<ForgotPasswordPage />} />
      <Route path="/redefinePasswordPage" element={<RedefinePasswordPage />} />
    </Route>,
  ),
);
