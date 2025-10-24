// ========== Router.jsx ==========
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
          if (!res.ok) {
            throw new Error("Failed to load games.json");
          }
          return res.json();
        },
      },
      {
        path: "game/:id",
        element: <GameDetails />,
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
    ],
  },


  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      }
    ]
  },


  {
    path: "*",
    element: (
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 drop-shadow-[0_0_40px_rgba(255,165,0,0.5)] animate-pulse">
          404
        </h1>
        <p className="text-2xl font-bold tracking-widest text-gray-300">
          PAGE NOT FOUND
        </p>
        <p className="max-w-md mt-4 text-gray-400">
          Looks like you've ventured into the void. <br />
          <span className="text-orange-400">Return to the battlefield</span> and
          keep playing!
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 px-8 py-3 text-lg font-semibold text-white rounded-lg bg-orange-500 hover:bg-orange-600 hover:scale-105 shadow-[0_0_25px_rgba(255,165,0,0.6)] transition-all duration-300"
        >
          ⬅ Back to Home
        </button>
        <div className="absolute w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>
    ),
  },
]);

export default router;
