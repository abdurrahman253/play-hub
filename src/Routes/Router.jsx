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
import Leaderboard from "../pages/Leaderboard"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/games.json");
          if (!res.ok) throw new Error("Failed to load games.json");
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
          const res = await fetch("/games.json");
          if (!res.ok) throw new Error("Failed to load games.json");
          const games = await res.json();
          const game = games.find((g) => g.id === params.id);
          if (!game) throw new Response("Game Not Found", { status: 404 });
          return game;
        },
      },
      {
        path: "leaderboard", 
        element: <Leaderboard />,
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

  // Auth Layout Routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login",
        element: <Login /> 
      },
      { path: "/auth/register", 
        element: <Register /> 
      },
    ],
  },

  { path: "/forget-password", 
    element: <ForgetPassword /> 
  },

  { path: "*", 
    element: <NotFound /> 
  },
]);

export default router;
