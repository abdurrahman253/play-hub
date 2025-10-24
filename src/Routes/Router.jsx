import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  //  Home layout routes
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/games.json");
          if (!res.ok) {
            throw new Error("Failed to load games.json");
          }
          return res.json();
        },
      },
      {
        path: "game/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          console.log("Loading game with ID:", params.id);
          const res = await fetch("/games.json");
          if (!res.ok) throw new Error("Failed to load games.json");
          const games = await res.json();
          const game = games.find((g) => g.id === params.id);
          console.log("Found game:", game);
          if (!game) throw new Response("Game Not Found", { status: 404 });
          return game;
        },
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },

  // Auth layout routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  // Forget Password
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },

  //  404 Page
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
