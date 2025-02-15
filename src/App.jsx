import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ProtectedRoute } from "./utils";
import "../node_modules/react-simple-toasts/dist/theme/failure.css";
import "../node_modules/react-simple-toasts/dist/theme/success.css";

import Layout from "./layout";
import Error from "./pages/Error";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Faq from "./pages/FAQs";

import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import VerifyAccount from "./pages/Auth/Verify";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import Home from "./pages/Home";
// import Orders from "./pages/MyAccount/components/Orders";
// import MyPackages from "./pages/MyAccount/components/MyPackages";
// import AccountDetails from "./pages/MyAccount/components/AccountDetails";
// import Referrals from "./pages/MyAccount/components/Referrals";
// import MyAccount from "./pages/MyAccount";
// import PackageDetails from "./pages/PackageDetails";
// import SpecialPackageDetails from "./pages/SpecialPackageDetails";
// import VSLPackageDetails from "./pages/VSLPackageDetails";
// import Payment from "./pages/Payment";
// import Store from "./pages/Store";
// import Cart from "./pages/Cart";

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/auth",
          element: <Auth />,
          children: [
            {
              path: "/auth/login",
              element: <Login />,
            },
            {
              path: "/auth/register",
              element: <Register />,
            },
            {
              path: "/auth/forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "/auth/verify-account",
              element: <VerifyAccount />,
            },
          ],
        },
        {
          path: "/",
          element: <Home />,
        },
        //   {
        //     path: "/payment/:id",
        //     element: <Payment />,
        //   },
        //   {
        //     path: "/packages/:id",
        //     element: <ProtectedRoute />,
        //     children: [
        //       {
        //         path: "/packages/:id",
        //         element: <PackageDetails />,
        //       },
        //     ],
        //   },
        //   {
        //     path: "/special-packages/:id",
        //     element: <ProtectedRoute />,
        //     children: [
        //       {
        //         path: "/special-packages/:id",
        //         element: <SpecialPackageDetails />,
        //       },
        //     ],
        //   },
        //   {
        //     path: "/vsl-packages/:id",
        //     element: <ProtectedRoute />,
        //     children: [
        //       {
        //         path: "/vsl-packages/:id",
        //         element: <VSLPackageDetails />,
        //       },
        //     ],
        //   },
        //   {
        //     path: "/my-account",
        //     element: <ProtectedRoute />,
        //     children: [
        //       {
        //         path: "/my-account",
        //         element: <MyAccount />,
        //         children: [
        //           {
        //             path: "/my-account/my-packages",
        //             element: <MyPackages />,
        //           },
        //           {
        //             path: "/my-account/transactions",
        //             element: <Orders />,
        //           },
        //           {
        //             path: "/my-account/account-details",
        //             element: <AccountDetails />,
        //           },
        //           {
        //             path: "/my-account/referrals",
        //             element: <Referrals />,
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // {
        //   path: "/",
        //   element: <ProtectedRoute />,
        //   children: [
        //     {
        //       path: "/cart",
        //       element: <Cart />,
        //     },
        //     {
        //       path: "/store",
        //       element: <Store />,
        //     },
        //   ],
        // },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}

export default App;
