import React, { useEffect } from "react";
import Banner from "../Components/HomeLayout/Banner";
import PopularGames from "../Components/HomeLayout/PopularGames";
import NewsLetter from "../Components/HomeLayout/NewsLetter";
import { useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
    const games = useLoaderData();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
           const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); 
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]); 

    return (
       
        <div id="top" className="mt-10"> 
            <Banner />
            <PopularGames games={games} />
            <NewsLetter />
        </div>
    );
};

export default Home;
