import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import { UserProvider } from "../contexts/UserContext";
import DashboardPage from "../pages/DashboardPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import { NewPasswordPage } from "../pages/NewPasswordPage";
import RedefinePasswordPage from "../pages/RedefinePasswordPage";
import { SignInPage } from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { WelcomePage } from "../pages/WelcomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<UserProvider><App /></UserProvider>}>
      <Route path="/" element={<HomePage />} />
      <Route path="/welcomePage" element={<WelcomePage />} />
      <Route path="/signUpPage" element={<SignUpPage />} />
      <Route path="/signInPage" element={<SignInPage />} />
      <Route path="/forgotPasswordPage" element={<ForgotPasswordPage />} />
      <Route path="/redefinePasswordPage" element={<RedefinePasswordPage />} />
      <Route path="/newPasswordPage" element={<NewPasswordPage/>} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
    </Route>,
  ),
);
