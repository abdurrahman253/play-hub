import React from "react";
import Banner from "../Components/HomeLayout/Banner";
import PopularGames from "../Components/HomeLayout/PopularGames";
import NewsLetter from "../Components/HomeLayout/NewsLetter";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData() || []; // যদি data না আসে, খালি array থাকবে
  const topSixGames = data.slice(0, 6); // প্রথম ৬টা গেম

  return (
    <div className="mt-10">
      <Banner />
      <PopularGames games={topSixGames} />
      <NewsLetter />
    </div>
  );
};

export default Home;

