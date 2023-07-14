import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route  path="/" element={<HomePage />} />
      <Route path="/signUpPage" element={<SignUpPage />} />
    </Route>,
  ),
);
